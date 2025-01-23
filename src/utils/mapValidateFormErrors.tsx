import { ZodError } from "zod";

export const mapValidationErrors = (err: ZodError): { [key: string]: string } => {
  const validationErrors: { [key: string]: string } = {};
  
  err.errors.forEach((error) => {
    if (error.path.length) {
      validationErrors[error.path[0] as string] = error.message;
    }
  });
  
  return validationErrors;
};
