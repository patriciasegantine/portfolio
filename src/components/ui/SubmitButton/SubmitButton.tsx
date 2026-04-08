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
              rounded-lg text-white dark:text-zinc-900 font-medium transition-colors
              focus-ring
              ${isLoading
                ? "opacity-75 cursor-not-allowed bg-zinc-800 dark:bg-zinc-100"
                : "bg-zinc-800 hover:bg-zinc-700 dark:bg-zinc-100 dark:hover:bg-zinc-200"}`}
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
