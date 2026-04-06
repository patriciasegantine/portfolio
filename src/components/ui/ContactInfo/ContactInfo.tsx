'use client'

import React from "react";
import { Mail, MapPin } from "lucide-react";
import { FaGlobe } from "react-icons/fa";
import { contactInfo } from "@/data/contactInfo";

const ContactInfo: React.FC = () => {
  const icons: Record<string, React.ElementType> = {
    Mail,
    MapPin,
    default: FaGlobe,
  };
  
  return (
    <div
      data-testid="contact-info"
      className="bg-white dark:bg-zinc-800/50 rounded-2xl p-6 border shadow-sm space-y-6 transition-colors-custom border-gray-200 dark:border-zinc-700">
      {contactInfo.length === 0 && (
        <p data-testid="no-contact-info" className="text-center text-secondary dark:text-secondary">
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
            className="p-3 rounded-lg bg-zinc-100 dark:bg-zinc-700/50 border border-zinc-200 dark:border-zinc-700/50
                text-secondary dark:text-secondary
                group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700
                transition-colors"
          >
            {React.createElement(icons[item.icon] || icons.default, {
              className: "w-5 h-5 text-secondary dark:text-secondary",
            })}
          </div>
          <div>
            <p className="text-sm font-medium text-secondary dark:text-secondary">{item.label}</p>
            <p
              className="text-primary group-hover:text-secondary-light transition-colors"
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
