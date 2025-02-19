import React from "react";
import ContactForm from "@/components/ContactForm/ContactForm";
import ContactInfo from "@/components/ContactInfo/ContactInfo";
import ContactSocialLinks from "@/components/ContactSocialLinks/ContactSocialLinks";
import { SectionHeader } from "@/components/SectionHeader/SectionHeader";
import { SectionWrapper } from "@/components/SectionWrapper/SectionWrapper";

const Contact: React.FC = () => {
  return (
    <SectionWrapper id="contact" data-testid="contact" aria-label="Contact section" variant="secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <SectionHeader title={"Let's Connect"}/>
            <p className="text-secondary dark:text-zinc-300">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ContactForm/>
            
            <div className="space-y-8">
              <ContactInfo/>
              <ContactSocialLinks/>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
