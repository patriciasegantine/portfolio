'use client'

import React, { useState } from "react";
import { z, ZodError } from "zod";
import FormInput from "@/components/FormInput/FormInput";
import SubmitButton from "@/components/SubmitButton/SubmitButton";
import contactSchema from "@/validate/contactSchema";
import useFetchSendEmail from "@/hook/useFetchSendEmail";
import { mapValidationErrors } from "@/utils/mapValidateFormErrors";
import Notification from "@/components/Notification/Notification";
import { errorMessages } from "@/validate/errorMessages";
import { successMessages } from "@/validate/successMessages";
import { focusOnErrorField } from "@/utils/focusOnErrorField";

export type FormValues = z.infer<typeof contactSchema>;

const ERROR_BORDER_CLASS = "border-red-500";
const ERROR_TEXT_CLASS = "text-red-500 text-sm";
const DEFAULT_FORM_VALUES: FormValues = {name: "", email: "", message: ""};

const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>(DEFAULT_FORM_VALUES);
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  
  const {isLoading, fetchSendEmail} = useFetchSendEmail();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {id, value} = e.target;
    setFormValues((prev) => ({...prev, [id]: value}));
  };
  
  const resetForm = () => {
    setFormValues(DEFAULT_FORM_VALUES);
    setErrors({});
    setHasAttemptedSubmit(false);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHasAttemptedSubmit(true);
    
    try {
      contactSchema.parse(formValues);
      setErrors({});
      
      await fetchSendEmail(formValues);
      
      setNotification({
        type: "success",
        message: successMessages.description,
      });
      resetForm();
    } catch (err: unknown) {
      if (err instanceof ZodError) {
        const validationErrors = mapValidationErrors(err);
        setErrors(validationErrors);
        focusOnErrorField(validationErrors);
      } else {
        setNotification({
          message: errorMessages.submissionError.message,
          type: "error",
        });
        console.error(errorMessages.submissionError.message, err);
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
        
        <SubmitButton isLoading={isLoading}/>
      </form>
      
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
};

export default ContactForm;
