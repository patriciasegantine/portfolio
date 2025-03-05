import { FormValues } from "@/components/ui/ContactForm/ContactForm";

export const focusOnErrorField = (errors: Partial<FormValues>) => {
  const firstErrorFieldId = Object.keys(errors)[0];
  if (firstErrorFieldId) {
    const field = document.getElementById(firstErrorFieldId);
    field?.focus();
  }
};
