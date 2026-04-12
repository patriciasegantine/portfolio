import { NextRequest, NextResponse } from "next/server";
import { personalInboxTemplate } from "@/utils/personalInboxTemplate";
import { confirmationTemplate } from "@/utils/confirmationTemplate";
import nodemailer from "nodemailer";
import { z } from "zod";
import { successMessages } from "@/validate/successMessages";
import { errorMessages } from "@/validate/errorMessages";

const sendEmailSchema = z.object({
  name: z.string().trim().min(2).max(50),
  email: z.string().trim().email().max(100),
  message: z.string().trim().min(10).max(500),
});

const getEnv = () => {
  const host = process.env.EMAIL_SERVER_HOST;
  const port = Number(process.env.EMAIL_SERVER_PORT);
  const user = process.env.EMAIL_SERVER_USER;
  const pass = process.env.EMAIL_SERVER_PASSWORD;

  if (!host || !port || !user || !pass) {
    throw new Error("Missing email server environment variables.");
  }

  return { host, port, user, pass };
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = sendEmailSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {error: errorMessages.validationError.message},
        {status: 422}
      );
    }
    const {name, email, message} = parsed.data;
    const { host, port, user, pass } = getEnv();

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: false,
      auth: {
        user,
        pass,
      },
    });
    
    // to me
    await transporter.sendMail({
      from: `"Portfolio Contact" <${user}>`,
      replyTo: email,
      to: user,
      subject: "New message from Portfolio",
      html: personalInboxTemplate(name, email, message),
    });
    
    // to sender
    await transporter.sendMail({
      from: `Patricia Segantine <${user}>`,
      to: email,
      subject: "Thank you for reaching out!",
      html: confirmationTemplate(name),
    });
    
    return NextResponse.json({message: successMessages.description}, {status: 200});
  } catch (error) {
    console.error(errorMessages.submissionError.message, error);
    return NextResponse.json(
      {error: errorMessages.submissionError.message},
      {status: 500}
    );
  }
}
