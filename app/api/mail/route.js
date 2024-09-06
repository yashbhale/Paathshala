// pages/api/sendEmail.js
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const data = await req.json();
  const otp1 = data.otp;
  const email = data.email;
  const name = data.name;

  console.log("Email .................. ",email);

  // Create a transporter object using SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other services like 'hotmail', 'yahoo', etc.
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password
    },
  });

  // Set up email data
  let mailOptions = {
    from: process.env.EMAIL_USER, // Sender address
    to: email, // List of recipients
    subject: 'subject', // Subject line
    text: `Dear ${name},

Thank you for choosing Dukaan!

To complete your account verification, please use the following One-Time Password (OTP):

[${otp1}]

This OTP is valid for the next 10 minutes. Please do not share this OTP with anyone.

If you did not request this verification, please contact our support team immediately at support@dukaan.com.

Thank you for your cooperation.

Best regards,

The Dukaan Team`, // Plain text body
  };

  try {
    // Send mail with defined transport object
    await transporter.sendMail(mailOptions);
    // res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    // res.status(500).json({ message: 'Error sending email.' });
  }
  return NextResponse.json({ Vaibhav: "name" })
}

