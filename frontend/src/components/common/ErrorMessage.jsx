import { AlertCircle } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

const ErrorMessage = ({
  message = "Something went wrong. Please try again.",
}) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`flex min-h-75 ${darkMode ? `bg-surface-dark` : `bg-creamy`} flex-col items-center justify-center gap-3 px-6 text-center`}
    >
      <AlertCircle size={32} className="text-red-500" />

      <h3 className={`text-lg ${darkMode ? `text-primary` : `text-theme`} font-semibold`}>Unable to load content</h3>

      <p className="max-w-md text-sm text-primary/70">{message}</p>
    </div>
  );
};

export default ErrorMessage;
