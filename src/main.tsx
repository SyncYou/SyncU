import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ToastProvider } from "oasis-toast";
import { AuthProvider } from "./providers/AuthProvider.tsx";
import SkeletonLoader from "./lib/SkeletonLoader.tsx";

const Root = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 100); 

    return () => clearTimeout(timeout);
  }, []);

  return (
    <StrictMode>
      <ToastProvider>
        <AuthProvider>
          {isLoading ? <SkeletonLoader /> : <App />}
        </AuthProvider>
      </ToastProvider>
    </StrictMode>
  );
};



createRoot(document.getElementById("root")!).render(<Root />);
