import { useState } from 'react';
import emailjs from 'emailjs-com';
import { errorMessages } from "@/validate/errorMessages";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const useFetchSendEmail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  
  const fetchSendEmail = async (formData: FormValues) => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
    
    setIsLoading(true);
    setError(null);
    setSuccess(false);
    
    try {
      const response = await emailjs.send(serviceId, templateId, {...formData}, publicKey);
      
      setSuccess(true);
      return response;
    } catch (error) {
      setError(errorMessages.submissionError.message)
    } finally {
      setIsLoading(false);
    }
  };
  
  return {fetchSendEmail, isLoading, error, success};
};

export default useFetchSendEmail;
