import { NextResponse } from 'next/server';

export type SocialLink = {
  name: string;
  href: string;
  icon: string;
};

export async function GET() {
  const socialLinks: SocialLink[] = [
    {
      icon: 'FaGithub',
      name: 'GitHub',
      href: 'https://github.com/patriciasegantine',
    },
    {
      icon: 'FaLinkedin',
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/patriciasegantine',
    },
  ];
  
  return NextResponse.json(socialLinks);
}
