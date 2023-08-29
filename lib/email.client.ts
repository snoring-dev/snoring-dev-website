import nodemailer from "nodemailer";
import { google } from "googleapis";

const OAuth2 = google.auth.OAuth2;
const OAuthClient = new OAuth2(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET);
OAuthClient.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });

type EmailPayload = {
  from?: string;
  subject: string;
  html: string;
};

export const sendEmail = async (data: EmailPayload) => {
  const accessToken = await OAuthClient.getAccessToken();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    from: 'Contact - Snoring.dev <snoring.dev@gmail.com>',
    auth: {
      type: "OAuth2",
      user: "snoring.dev@gmail.com",
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
      accessToken: accessToken?.token ?? '',
    },
  });

  return await transporter.sendMail({
    to: 'med.jemmoudi@gmail.com',
    ...data,
  });
};
