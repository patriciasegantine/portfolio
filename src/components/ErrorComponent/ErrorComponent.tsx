import React from "react";
import { FaExclamationCircle } from "react-icons/fa";

interface ErrorComponentProps {
  message: string;
  testId?: string;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({
                                                         message,
                                                         testId = "error",
                                                       }) => (
  <div
    className="error flex justify-center items-center gap-2 text-center"
    data-testid={testId}
  >
    <FaExclamationCircle className="icon w-6 h-6 text-red-600 dark:text-red-400"/>
    <span className="text-red-600 dark:text-red-400">{message}</span>
  </div>
);

export default ErrorComponent;
