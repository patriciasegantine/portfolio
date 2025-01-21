'use client'

import React, { useEffect, useState } from "react";
import { Mail, MapPin } from "lucide-react";
import { FaGlobe } from "react-icons/fa";
import LoadingComponent from "@/components/LoadingComponent/LoadingComponent";
import ErrorComponent from "@/components/ErrorComponent/ErrorComponent";

interface ContactInfoType {
  icon: string;
  label: string;
  value: string;
  href: string;
}

interface ContactInfoProps {
}

const ContactInfo: React.FC<ContactInfoProps> = ({}) => {
  const [contactInfo, setContactInfo] = useState<ContactInfoType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const icons: Record<string, React.ElementType> = {
    Mail,
    MapPin,
    default: FaGlobe,
  };
  
  const fetchContactInfo = async () => {
    try {
      const response = await fetch('/api/contact-info');
      if (!response.ok) {
        throw new Error('Failed to fetch contact info');
      }
      const data = await response.json();
      setContactInfo(data);
      setIsLoading(false);
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Failed to fetch contact info.';
      setError(errorMessage);
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    fetchContactInfo();
  }, []);
  
  return (
    <div
      data-testid="contact-info"
      className="bg-white dark:bg-zinc-800/50 rounded-2xl p-6 border shadow-sm space-y-6 transition-colors-custom border-gray-200 dark:border-zinc-700">
      
      {isLoading && <LoadingComponent message="Loading contact informations..."/>}
      
      {error && <ErrorComponent message={error}/>}
      
      
      {!isLoading && !error && contactInfo.length === 0 && (
        <p data-testid="no-contact-info" className="text-center text-secondary dark:text-zinc-400">
          No contact information available.
        </p>
      )}
      
      {contactInfo.map((item, index) => (
        <a
          data-testid="contact-info-item"
          key={index}
          href={item.href}
          target={item.href.includes("mailto") ? "_self" : "_blank"}
          className="flex items-start gap-4 group"
        >
          <div
            className="p-3 rounded-lg bg-zinc-100 dark:bg-zinc-700/50
                text-secondary dark:text-zinc-300
                group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700
                transition-colors"
          >
            {React.createElement(icons[item.icon] || icons.default, {
              className: "w-5 h-5 text-secondary dark:text-zinc-300",
            })}
          </div>
          <div>
            <p className="text-sm font-medium text-secondary dark:text-zinc-400">{item.label}</p>
            <p
              className="text-primary-dark dark:text-zinc-100
              group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors"
            >
              {item.value}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ContactInfo;
