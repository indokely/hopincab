import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: EmailOptions) {
  // Configuration for Gmail SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  // Verify connection configuration
  try {
    await transporter.verify();
    console.log('✅ SMTP server connection verified');
  } catch (error) {
    console.error('❌ SMTP connection error:', error);
    throw new Error('Failed to connect to email server');
  }

  // Send mail with defined transport object
  const info = await transporter.sendMail({
    from: process.env.SMTP_FROM || '\"HopInCab\" <noreply@hopincab.com>',
    to,
    subject,
    html,
  });
 
  return info;
}
