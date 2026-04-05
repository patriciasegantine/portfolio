import React from "react";
import { FaSpinner } from "react-icons/fa";

interface LoadingComponentProps {
  message?: string;
  testId?: string;
}

const LoadingComponent: React.FC<LoadingComponentProps> = ({
                                                             message = "Loading...",
                                                             testId = "loading",
                                                           }) => (
  <div
    className="loading flex justify-center items-center gap-2"
    data-testid={testId}
  >
    <FaSpinner className="icon w-6 h-6 animate-spin text-secondary"/>
    <span className="text-secondary">{message}</span>
  </div>
);

export default LoadingComponent;
