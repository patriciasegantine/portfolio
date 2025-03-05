import React, { useEffect, useRef, useState } from "react";
import { AiOutlineCheckCircle, AiOutlineClose, AiOutlineCloseCircle } from "react-icons/ai";
import { cn } from "@/utils/classNamesUtility";

interface NotificationProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({message, type, onClose}) => {
  const time = 5000;
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [pause, setPause] = useState(false);
  
  useEffect(() => {
    if (!pause) {
      timerRef.current = setTimeout(() => {
        onClose();
      }, time);
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [pause, onClose]);
  
  const handleMouseEnter = () => {
    setPause(true);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };
  
  const handleMouseLeave = () => {
    setPause(false);
  };
  
  const notificationStyles = cn(
    "fixed top-20 right-6 max-w-sm w-full flex items-start gap-3 px-5 py-4 rounded-lg shadow-lg text-sm font-medium z-50 transition-opacity duration-300",
    {
      "bg-green-500 text-white": type === "success",
      "bg-red-500 text-white": type === "error",
    }
  );
  
  const iconStyles = "flex-shrink-0 text-white";
  
  return (
    <div
      data-testid="notification-icon"
      className={notificationStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {type === "success" ? (
        <AiOutlineCheckCircle size={24} className={iconStyles} data-testid="success-icon"/>
      ) : (
        <AiOutlineCloseCircle size={24} className={iconStyles} data-testid="error-icon"/>
      )}
      <div className="flex-1">
        <p>{message}</p>
      </div>
      
      <button
        data-testid="close-notification"
        onClick={onClose}
        aria-label="Close notification"
        className="absolute top-2 right-2 text-white hover:text-gray-200 transition-colors"
      >
        <AiOutlineClose size={16}/>
      </button>
    </div>
  );
};

export default Notification;
