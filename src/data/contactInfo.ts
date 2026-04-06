export type ContactInfoItem = {
  icon: "Mail" | "MapPin";
  label: string;
  value: string;
  href: string;
};

export const contactInfo: ContactInfoItem[] = [
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
