import { useState } from "react";

const useToastNotifications = () => {
  const [toast, setToast] = useState<{ type: 'success' | 'error' | 'warning'; message: string; description: string } | null>(null);

  const showToast = (type: 'success' | 'error' | 'warning', message: string, description: string) => {
    setToast({ type, message, description });

    // Automatically hide the toast after 5 seconds
    setTimeout(() => {
      setToast(null);
    }, 5000);
  };

  return {
    toast,
    showToast,
  };
};

export default useToastNotifications;
