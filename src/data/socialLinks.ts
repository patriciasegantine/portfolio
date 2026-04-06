export type SocialLink = {
  name: string;
  href: string;
  icon: "FaGithub" | "FaLinkedin";
};

export const socialLinks: SocialLink[] = [
  {
    icon: "FaGithub",
    name: "GitHub",
    href: "https://github.com/patriciasegantine",
  },
  {
    icon: "FaLinkedin",
    name: "LinkedIn",
    href: "https://linkedin.com/in/patriciasegantine",
  },
];
