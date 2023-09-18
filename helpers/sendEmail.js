const nodemailer = require("nodemailer");
require("dotenv").config();

const { UKR_NET_MAIL, UKR_NET_PASSWORD } = process.env;

const nodeMailerConfig = {
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: UKR_NET_MAIL,
    pass: UKR_NET_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodeMailerConfig);

const sendEmail = async (data) => {
  const mail = { ...data, from: UKR_NET_MAIL };
  return transport.sendMail(mail);
};

module.exports = sendEmail;
