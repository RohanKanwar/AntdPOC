const nodemailer = require("nodemailer");

const emailContent = (otp, emailid) => {
  return (
    "<b>Verify your account using OTP. Do not share it with anyone </b>" + otp
  );
};

module.exports = async function(otp, emailid) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
      user: 'rohan.kanwar@edba.io',
      pass: 'Rk1989Rk'
    }
  });
  const content = emailContent(otp, emailid);
  console.log(emailid);
  await transporter.sendMail({
    from: 'rohan.kanwar@edba.io',
    to: emailid,
    subject: "Email Verification",
    text: " Verification OTP",
    html: content
  });
  console.log(otp);
};
