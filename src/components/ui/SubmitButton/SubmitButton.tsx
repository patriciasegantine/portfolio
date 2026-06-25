import { Loader, Send } from "lucide-react";

interface SubmitButtonProps {
  isLoading: boolean;
}

const SubmitButton = ({isLoading}: SubmitButtonProps) => {
  return (
    <button
      data-testid="submit-button"
      type="submit"
      className={`relative w-full inline-flex items-center justify-center gap-2 px-6 py-3
              rounded-control text-accent-contrast font-medium transition-all duration-300
              focus-ring
              ${isLoading
                ? "cursor-not-allowed bg-accent opacity-70"
                : "bg-accent shadow-soft hover:-translate-y-0.5 hover:bg-accent-strong hover:shadow-lift"}`}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
      <span className="relative flex">
        <Loader className="animate-spin w-4 h-4"/>
      </span>
          Sending...
        </>
      ) : (
        <>
          <Send className="w-4 h-4"/>
          Send Message
        </>
      )}
    </button>
  );
};

export default SubmitButton;
