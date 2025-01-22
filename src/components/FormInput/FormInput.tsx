import React from "react";

interface FormInputProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  className?: string;
  rows?: number;
  minLength?: number;
  maxLength?: number;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  ariaInvalid?: boolean | "true" | "false";
  ariaDescribedBy?: string;
}

const FormInput: React.FC<FormInputProps> = ({
                                               id,
                                               label,
                                               type = "text",
                                               placeholder,
                                               className = "",
                                               rows,
                                               minLength,
                                               maxLength,
                                               value,
                                               onChange,
                                               ariaInvalid,
                                               ariaDescribedBy,
                                             }) => {
  const baseClasses =
    "w-full px-4 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-700/50 " +
    "border border-zinc-200 dark:border-zinc-700 " +
    "text-primary-dark dark:text-zinc-100 " +
    "focus:outline-none focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-600 transition-colors";
  
  const inputAttributes = {
    id,
    minLength,
    maxLength,
    placeholder,
    value,
    "aria-invalid": ariaInvalid,
    "aria-describedby": ariaDescribedBy
  };
  
  const TextareaInput = (
    <textarea
      rows={rows}
      className={`${baseClasses} resize-none ${className}`}
      onChange={(e) => onChange && onChange(e)}
      {...inputAttributes}
    />
  );
  
  const TextInput = (
    <input
      type={type}
      className={`${baseClasses} ${className}`}
      onChange={(e) => onChange && onChange(e)}
      {...inputAttributes}
    />
  );
  
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-secondary dark:text-zinc-300 mb-1">
        {label}
      </label>
      {rows ? TextareaInput : TextInput}
    </div>
  );
};

export default FormInput;
