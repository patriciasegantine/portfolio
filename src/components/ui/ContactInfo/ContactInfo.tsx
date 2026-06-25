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
      className="space-y-1 transition-colors-custom">
      {contactInfo.length === 0 && (
        <p data-testid="no-contact-info" className="text-center text-secondary dark:text-secondary">
          No contact information available.
        </p>
      )}
      
      <div className="divide-y divide-line">
        {contactInfo.map((item, index) => (
          <a
            data-testid="contact-info-item"
            key={index}
            href={item.href}
            target={item.href.includes("mailto") ? "_self" : "_blank"}
            className="group flex items-center gap-4 py-4 focus-ring"
          >
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-control bg-accent-soft text-accent-strong transition-colors group-hover:bg-accent group-hover:text-accent-contrast"
            >
              {React.createElement(icons[item.icon] || icons.default, {
                className: "h-5 w-5",
              })}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">{item.label}</p>
              <p
                className="mt-1 text-primary transition-colors group-hover:text-accent-strong"
              >
                {item.value}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
