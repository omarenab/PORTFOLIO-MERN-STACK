
import { LoaderCircle } from "lucide-react";

const LoadingSpinner = ({ message = "Loading..." }) => {
  return (
    <div className="flex min-h-75 flex-col items-center justify-center gap-3">
      <LoaderCircle
        size={32}
        className="animate-spin text-secondary"
      />
      <p className="text-sm text-primary/70">{message}</p>
    </div>
  );
};

export default LoadingSpinner;
