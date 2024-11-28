import nodemailer from 'nodemailer';
import { createEvent, EventAttributes, EventStatus } from 'ics';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, date, message } = body;

    // Corrected month (0-based index for November)
    const startDate = new Date(2024, 10, 29, 15, 0); // November is 10 (not 11)

    // Set up the event details
    const event: EventAttributes = {
      // start: [startDate.getUTCFullYear(), startDate.getUTCMonth() + 1, startDate.getUTCDate(), startDate.getUTCHours(), startDate.getUTCMinutes()],
      start: [2024, 10, 29, 15, 0], // Event starts on November 29, 2024, at 3:00 PM
      duration: { hours: 7 }, // Event duration of 7 hours
      title: `Photography Session with ${name}`,
      description: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      location: 'Your Studio or Location',
      status: 'CONFIRMED' as EventStatus, // Ensure correct type
      organizer: { name: 'Your Name', email: process.env.EMAIL_USER! },
      attendees: [{ name, email }, { name: 'Hlogi', email: process.env.EMAIL_USER! }],
    };

    // Generate the .ics file content using the 'ics' library
    const { error, value: icsFileContent } = createEvent(event);

    if (error) {
      console.error('Error creating iCalendar event:', error);
      throw new Error('Failed to create calendar event');
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content with .ics file attachment
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: `realtriumphndlovu@gmail.com, ${email}`, // Send the email to yourself for now
      subject: `New Booking Request from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Preferred Date: ${date}
        Message: ${message}

        An iCalendar file is attached for quick scheduling.
      `,
      attachments: [
        {
          filename: 'booking.ics',
          content: icsFileContent, // Attach the generated .ics content
        },
      ],
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: 'Email with calendar event sent successfully!', info }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Failed to send email', error }),
      { status: 500 }
    );
  }
}
