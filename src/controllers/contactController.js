import nodemailer from 'nodemailer';
import { emailTemplate } from '../templates/emailTemplate.js';
import dotenv from 'dotenv';


dotenv.config();

const contactController = async (request, reply) => {

  //receiver email for receiving contact information when CONTACT_RECEIVER IS NOT SET  or for multipurpose endpoint
  const { name,receiver, email, message, subject , phoneNumber } = request.body;

  if (!name || !email || !message) {
    return reply.status(400).send({ error: 'All fields are required.' });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure:true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: receiver || process.env.CONTACT_RECEIVER,
    subject:  `Contact Form Submission - ${subject}` ,
    html: emailTemplate(name, email, message,subject ,phoneNumber),
  };

  try {
    await transporter.sendMail(mailOptions);
    return reply.status(200).send({ success: 'Message sent successfully!',status:200 });
  } catch (error) {

    console.log(error)
    return reply.status(500).send({ error: 'Failed to send message.' });
  }
};


export default contactController