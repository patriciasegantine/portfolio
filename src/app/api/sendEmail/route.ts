import { NextRequest, NextResponse } from "next/server";
import { personalInboxTemplate } from "@/utils/personalInboxTemplate";
import { confirmationTemplate } from "@/utils/confirmationTemplate";
import nodemailer from "nodemailer";
import { successMessages } from "@/validate/successMessages";
import { errorMessages } from "@/validate/errorMessages";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {name, email, message} = body;
    
    if (!name || !email || !message) {
      return NextResponse.json(
        {error: "All fields (name, email, message) are required."},
        {status: 400}
      );
    }
    
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      secure: false,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
      debug: true,
    });
    
    // to me
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_SERVER_USER,
      subject: "New message from Portfolio",
      html: personalInboxTemplate(name, email, message),
    });
    
    // to sender
    await transporter.sendMail({
      from: `"Patricia Segantine | Front-end Developer" <${process.env.EMAIL_SERVER_USER}>`,
      to: email,
      subject: "Thank you for reaching out!",
      html: confirmationTemplate(name),
    });
    
    return NextResponse.json({message: successMessages.description}, {status: 200});
  } catch (error) {
    console.error(errorMessages.submissionError, error);
    return NextResponse.json(
      {error: errorMessages.submissionError},
      {status: 500}
    );
  }
}
