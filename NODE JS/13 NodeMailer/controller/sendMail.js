const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  try {
    let testAccount = await nodemailer.createTestAccount();

    // Connect with the SMTP
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal pass
      },
    });

    let info = await transporter.sendMail({
      from: '"SAURABH DWIVEDI 👻" <savagemen007@gmail.com>', // sender address
      to: "saurabhdwivedi2310@gmail.com", // list of receivers (you can add multiple users)
      subject: "Hello ✔ sent from NODE SERVER!", // Subject line
      text: "Hello world? Kaise ho SAURABH BHAI !!!", // plain text body
      html: "<b>Hello world</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    res.json(info);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while sending the email." });
  }
};

module.exports = sendMail;
