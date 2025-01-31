import { useState } from "react";
import { successMessages } from "@/validate/successMessages";
import { errorMessages } from "@/validate/errorMessages";

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export interface SendEmailResult {
  success: boolean;
  message: string;
  loading?: boolean;
}

export const useSendEmail = () => {
  const [loading, setLoading] = useState(false);
  
  const sendEmail = async (formData: EmailData): Promise<SendEmailResult> => {
    setLoading(true);
    
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
      if (res.ok) {
        return {success: true, message: successMessages.description};
      }
      
      return {success: false, message: data?.error || errorMessages.submissionError.message};
    } catch (error) {
      console.error(errorMessages.submissionError.message, error);
      return {success: false, message: errorMessages.submissionError.message};
    } finally {
      setLoading(false);
    }
  };
  
  return {
    sendEmail,
    loading,
  };
};
