'use client';

import React, { useState } from "react";
import { z } from "zod";
import FormInput from "@/components/FormInput/FormInput";
import contactSchema from "@/validate/contactSchema";

type FormValues = z.infer<typeof contactSchema>;

const ERROR_BORDER_CLASS = "border-red-500";
const ERROR_TEXT_CLASS = "text-red-500 text-sm";
const DEFAULT_FORM_VALUES: FormValues = {name: "", email: "", message: ""};

const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>(DEFAULT_FORM_VALUES);
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {id, value} = e.target;
    setFormValues((prev) => ({...prev, [id]: value}));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasAttemptedSubmit(true);
    
    try {
      contactSchema.parse(formValues);
      console.log("Form submitted successfully:", formValues);
      
      setErrors({});
    } catch (err: any) {
      if (err.errors) {
        const validationErrors: { [key: string]: string } = {};
        err.errors.forEach((error: any) => {
          validationErrors[error.path[0]] = error.message;
        });
        setErrors(validationErrors);
      }
    }
  };
  
  return (
    <div className="bg-white dark:bg-zinc-800/50 rounded-2xl p-8 shadow-sm">
      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
        <FormInput
          id="name"
          aria-invalid={!!errors.name}
          aria-describedby="name-error"
          label="Name"
          type="text"
          placeholder="Your name"
          minLength={2}
          maxLength={50}
          className={errors.name && hasAttemptedSubmit ? ERROR_BORDER_CLASS : ""}
          onChange={handleChange}
          value={formValues.name ?? ""}
        />
        {errors.name && hasAttemptedSubmit && <p id="name-error" className={ERROR_TEXT_CLASS}>{errors.name}</p>}
        
        <FormInput
          id="email"
          aria-invalid={!!errors.email}
          aria-describedby="email-error"
          label="Email"
          type="text"
          placeholder="your@email.com"
          minLength={5}
          maxLength={100}
          className={errors.email && hasAttemptedSubmit ? ERROR_BORDER_CLASS : ""}
          onChange={handleChange}
          value={formValues.email ?? ""}
        />
        {errors.email && hasAttemptedSubmit && <p id="email-error" className={ERROR_TEXT_CLASS}>{errors.email}</p>}
        
        <FormInput
          id="message"
          aria-invalid={!!errors.message}
          aria-describedby="message-error"
          label="Message"
          rows={4}
          minLength={10}
          maxLength={500}
          placeholder="Your message..."
          className={errors.message && hasAttemptedSubmit ? ERROR_BORDER_CLASS : ""}
          onChange={handleChange}
          value={formValues.message ?? ""}
        />
        {errors.message && hasAttemptedSubmit && (
          <p id="message-error" className={ERROR_TEXT_CLASS}>{errors.message}</p>
        )}
        
        <button
          type="submit"
          className={`relative w-full inline-flex items-center justify-center gap-2 px-6 py-3
              rounded-lg text-white font-medium transition-colors
              focus:outline-none focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-600
              ${isLoading ? "opacity-75 cursor-not-allowed bg-zinc-500 dark:bg-zinc-600" :
            "bg-zinc-800 hover:bg-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-600"}`}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
