import { NextResponse } from "next/server";

export const contactInfo = [
  {
    icon: "Mail",
    label: 'Email',
    value: 'pnsegantine@gmail.com',
    href: 'mailto:pnsegantine@gmail.com'
  },
  {
    icon: "MapPin",
    label: 'Location',
    value: 'England - UK',
    href: 'https://maps.app.goo.gl/XAQpU6Q2Rqfr7Jpx5'
  }
];

export async function GET() {
  return NextResponse.json(contactInfo);
}
