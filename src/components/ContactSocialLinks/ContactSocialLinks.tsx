import React from "react";
import SocialLinks from "@/components/SociaisLinks/SocialLinks";

const ContactSocialLinks: React.FC = () => {
  return (
    <div
      data-testid="contact-social-links"
      className="bg-white dark:bg-zinc-800/50 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-zinc-700 transition-colors-custom">
      <h3 className="text-primary-dark dark:text-zinc-100 font-medium mb-4">Follow Me</h3>
      <div className="flex gap-3">
        <SocialLinks showLabel={true}/>
      </div>
    </div>
  );
};

export default ContactSocialLinks;
