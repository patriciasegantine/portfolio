'use client'

import { useState } from "react";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

export const useFetchSendEmail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const fetchSendEmail = async (formValues: FormValues): Promise<string> => {
    setIsLoading(true);
    setError(null);
    
    try {
      await new Promise((resolve) => {
        console.log("Simulating API call with:", formValues);
        setTimeout(() => {
          resolve("Email sent successfully!");
        }, 2000);
      });
      
      setIsLoading(false);
      return "Email sent successfully!";
    } catch (err: any) {
      setIsLoading(false);
      setError("Failed to send email. Please try again later.");
      throw new Error("Failed to send email.");
    }
  };
  
  return {
    isLoading,
    error,
    fetchSendEmail,
  };
};
