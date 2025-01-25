import { NextResponse } from "next/server";

type ContactInfoItem = {
  icon: string;
  label: string;
  value: string;
  href: string;
};

export async function GET() {
  const contactInfo: ContactInfoItem[] = [
    {
      icon: "Mail",
      label: "Email",
      value: "pnsegantine@gmail.com",
      href: "mailto:pnsegantine@gmail.com",
    },
    {
      icon: "MapPin",
      label: "Location",
      value: "England - UK",
      href: "https://maps.app.goo.gl/XAQpU6Q2Rqfr7Jpx5",
    },
  ];
  
  return NextResponse.json(contactInfo);
}
