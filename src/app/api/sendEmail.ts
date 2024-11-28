import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, message, date } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'YOUR_EMAIL@gmail.com', 
        pass: 'YOUR_APP_PASSWORD',   
      },
    });

    const mailOptions = {
      from: email, // Customer's email
      to: 'YOUR_EMAIL@gmail.com', // Your email
      subject: 'New Booking Request',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Date: ${date}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
};

export default handler;
