'use client'

import FormInput from "@/components/FormInput/FormInput";
import SubmitButton from "@/components/SubmitButton/SubmitButton";

interface ContactFormProps {
}

const ContactForm = ({}: ContactFormProps) => {
  
  return (
    <div
      data-testid="contact-form"
      className="bg-white dark:bg-zinc-800/50 rounded-2xl p-6 border shadow-sm space-y-6 transition-colors-custom border-gray-200 dark:border-zinc-700">
      <form className="space-y-5" noValidate>
        <FormInput
          id="name"
          label="Name"
          type="text"
          placeholder="Your name"
          minLength={2}
          maxLength={50}
        />
        
        <FormInput
          id="email"
          label="Email"
          type="text"
          placeholder="your@email.com"
          minLength={5}
          maxLength={100}
        />
        
        <FormInput
          id="message"
          label="Message"
          rows={4}
          minLength={10}
          maxLength={500}
          placeholder="Your message..."
        />
        
        <SubmitButton isLoading={false}/>
      </form>
    </div>
  );
};

export default ContactForm;
