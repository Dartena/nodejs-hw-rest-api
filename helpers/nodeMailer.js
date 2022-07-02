const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "dartelinar@meta.ua",
    pass: META_PASSWORD,
  },
};

const sendEmail = async (data) => {
  const transporter = nodemailer.createTransport(nodemailerConfig);
  const email = { ...data, from: "dartelinar@meta.ua" };
  try {
    await transporter.sendMail(email);
    return true;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

module.exports = sendEmail;