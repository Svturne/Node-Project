const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "email@gmail.com",
    pass: "password",
  },
});

let mailOptions = {
  from: '"Name" <email@gmail.com>',
  to: "Recive-email@example.com",
  subject: "Hello",
  text: "Hello world?",
  html: "<b>Hello world?</b>",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Message sent: %s", info.messageId);
});
