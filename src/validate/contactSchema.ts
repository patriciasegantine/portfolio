import { z } from "zod";
import { validationMessages } from "@/validate/validationFormMessage";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty(validationMessages.name.required)
    .min(2, validationMessages.name.tooShort)
    .max(50, validationMessages.name.tooLong),
  email: z
    .string()
    .trim()
    .nonempty(validationMessages.email.required)
    .email(validationMessages.email.invalid)
    .max(50, validationMessages.email.tooLong),
  message: z
    .string()
    .trim()
    .nonempty(validationMessages.message.required)
    .min(10, validationMessages.message.tooShort)
    .max(500, validationMessages.message.tooLong),
});

export default contactSchema;
