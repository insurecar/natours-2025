const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // 1) Create a transporte
  // Looking to send emails in production? Check out our Email API/SMTP product!
  var transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  // 2) Define the email options
  const mailOptions = {
    from: 'Rostyslav Shyian <81600@ukr.net>',
    to: options.email,
    subject: options.subject,
    text: options.message,
    // html:
  };
  // 3) Send an email
  await transport.sendMail(mailOptions);
};

module.exports = sendEmail;
