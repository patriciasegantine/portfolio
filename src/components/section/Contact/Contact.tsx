import React from "react";
import ContactForm from "@/components/ui/ContactForm/ContactForm";
import ContactInfo from "@/components/ui/ContactInfo/ContactInfo";
import ContactSocialLinks from "@/components/ui/ContactSocialLinks/ContactSocialLinks";
import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
import { Section } from "@/components/ui/Section/Section";

const Contact: React.FC = () => {
  return (
    <Section
      id="contact"
      variant="secondary"
      aria-label="Contact"
    >
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <SectionTitle title={"Let's Contact"}/>
            
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
    </Section>
  );
};

export default Contact;
