import React from "react";
import SocialLinks from "@/components/ui/SocialLinks/SocialLinks";

const ContactSocialLinks: React.FC = () => {
  return (
    <div
      data-testid="contact-social-links"
      className="border-t border-line pt-4 transition-colors-custom [&_[data-testid=social-links]]:gap-2 [&_[data-testid=social-links]_a]:px-2.5 [&_[data-testid=social-links]_a]:py-1.5 [&_[data-testid=social-links]_a]:text-xs">
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="mr-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">Follow</h3>
        <SocialLinks showLabel={true}/>
      </div>
    </div>
  );
};

export default ContactSocialLinks;
