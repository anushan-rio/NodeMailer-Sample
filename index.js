const nodemailer = require('nodemailer');

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'anushandevstack@gmail.com', // your Gmail address
    pass: 'gmjb tcxm lwsp dffr' // your Gmail password or app password
  }
});

// Set up email data
const mailOptions = {
  from: 'anushandevstack@gmail.com', // sender address
  to: '', // list of receivers
  subject: 'Hello from Nodemailer', // Subject line
  text: 'This is Auto Mail For For OTP', // plain text body
  // html: '<b>This is a test email sent using Nodemailer and Gmail!</b>' // html body (optional)
};

// Send mail
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error occurred: ' + error.message);
  }
  console.log('Email sent: ' + info.response);
});
