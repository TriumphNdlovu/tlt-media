import nodemailer from 'nodemailer';
import { createEvent, EventAttributes, EventStatus } from 'ics';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, category, date, time, message } = body;

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
      organizer: { name: 'TLT MEDIA', email: process.env.EMAIL_USER! },
      attendees: [{ name, email }, { name: 'Hlogi', email: "lehlogonologiven8@gmail.com" }],
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
      to: ["lehlogonologiven8@gmail.com", email],
      subject: `New Booking Request from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Category: ${category}
        Preferred Date: ${date}
        Preferred Time: ${time}
        Message: ${message}
      `,
      html: `
        <div style="font-family: 'Georgia', serif; line-height: 1.8; color: #000; padding: 20px; background-color: #fff; border: 1px solid #000;">
          <h2 style="text-align: center; color: #000; text-transform: uppercase; letter-spacing: 2px;">New Booking Request</h2>
          <p style="margin: 0 0 20px; text-align: center;">Details of the request are as follows:</p>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 16px; color: #000;">
            <tr style="background-color: #f2f2f2; border-bottom: 2px solid #000;">
              <th style="text-align: left; padding: 10px; text-transform: uppercase; font-weight: bold;">Field</th>
              <th style="text-align: left; padding: 10px; text-transform: uppercase; font-weight: bold;">Details</th>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ccc;">Full Name</td>
              <td style="padding: 10px; border-bottom: 1px solid #ccc;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ccc;">Email</td>
              <td style="padding: 10px; border-bottom: 1px solid #ccc;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ccc;">Phone</td>
              <td style="padding: 10px; border-bottom: 1px solid #ccc;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ccc;">Category</td>
              <td style="padding: 10px; border-bottom: 1px solid #ccc;">${category}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ccc;">Preferred Date</td>
              <td style="padding: 10px; border-bottom: 1px solid #ccc;">${date}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ccc;">Start Time</td>
              <td style="padding: 10px; border-bottom: 1px solid #ccc;">${time}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ccc;">Additional Message</td>
              <td style="padding: 10px; border-bottom: 1px solid #ccc;">${message}</td>
            </tr>
          </table>
          <p style="text-align: center; margin-top: 20px; font-size: 14px; font-style: italic;">
            Thank you for using our booking system. Please contact us for any updates or inquiries.
          </p>
        </div>
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
