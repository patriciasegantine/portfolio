import { ABOUT_CONTENT } from '@/constants/aboutContent';
import React from "react";

export const AboutContent: React.FC = () => (
  <div className="space-y-4">
    {ABOUT_CONTENT.map(({id, text}) => (
      <p key={id} className="text-lg text-secondary dark:text-zinc-300 leading-relaxed">
        {text}
      </p>
    ))}
  </div>
);
