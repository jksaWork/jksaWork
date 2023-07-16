import { EmailPayload } from "@/comon.types";
import nodemailer from "nodemailer";

// const smtpOptions = {
//   host: process.env.MAIL_HOST || "smtp.mailtrap.io",
//   port: parseInt(process.env.PORT || "2525"),
//   secure: false,
//   auth: {
//     user: process.env.MAIL_USERNAME || "user",
//     pass: process.env.MAIL_PASSWORD || "password",
//   },
// };
const smtpOptions = {
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
};
export const sendMail = async (options: EmailPayload) => {
  const trans = nodemailer.createTransport({
    ...smtpOptions,
  });

  const { html, subject, to } = options;
  const data = {
    from: process.env.MAIL_FROM,
    subject,
    html,
    to,
    //     to,
  };
  await trans.sendMail(data);
};
