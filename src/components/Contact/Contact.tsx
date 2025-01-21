import React from "react";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import ContactInfo from "@/components/ContactInfo/ContactInfo";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-zinc-50 dark:bg-zinc-900/95 transition-colors-custom"
      data-testid="contact"
      aria-label="Contact"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-medium text-primary-dark dark:text-zinc-50 mb-4">Let&apos;s Connect</h2>
            <p className="text-secondary dark:text-zinc-300">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ContactForm/>
            
            <ContactInfo/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
