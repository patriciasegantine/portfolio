import { z } from "zod";

const validationMessages = {
  name: {
    required: "Name is required.",
    tooShort: "Name must be at least 2 characters long.",
    tooLong: "Name cannot be longer than 50 characters.",
  },
  email: {
    required: "Email is required.",
    invalid: "Enter a valid email address.",
    tooLong: "Email cannot be longer than 50 characters.",
  },
  message: {
    required: "Message cannot be empty.",
    tooShort: "Message must be at least 10 characters long.",
    tooLong: "Message cannot be longer than 500 characters.",
  },
};

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
