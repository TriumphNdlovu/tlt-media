import nodemailer from 'nodemailer';
import { createEvent, EventAttributes, EventStatus } from 'ics';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, date, time, message } = body;

    // Parse date and time
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth(); 
    const day = new Date(date).getDate();
    const hours = Number(time.split(':')[0]);
    const minutes = Number(time.split(':')[1]);

    // Set up the event details
    const event: EventAttributes = {
      start: [year, month + 1, day, hours, minutes],
      duration: { days: 1 }, // All-day event
      title: `Photography Session with ${name}`,
      description: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      location: `My Studio or ${name}'s Location`,
      status: 'CONFIRMED' as EventStatus,
      organizer: { name: 'Hlogi', email: process.env.EMAIL_USER! },
      attendees: [{ name, email }, { name: 'Hlogi', email: process.env.EMAIL_USER! }],
    };

    // Generate the .ics file content
    const { error, value: icsFileContent } = createEvent(event);

    if (error) {
      console.error('Error creating iCalendar event:', error);
      throw new Error('Failed to create calendar event');
    }

    // Validate email credentials
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error('Missing email credentials in environment variables');
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: [process.env.EMAIL_USER, email],
      subject: `New Booking Request from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Preferred Date: ${date}
        Preferred Time: ${time}
        Message: ${message}
      `,
      attachments: [
        {
          filename: 'booking.ics',
          content: icsFileContent,
        },
      ],
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully!', info }),
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error:', error.message || error);
    return new Response(
      JSON.stringify({ success: false, message: 'Failed to send email', error: error.message || error }),
      { status: 500 }
    );
  }
}
