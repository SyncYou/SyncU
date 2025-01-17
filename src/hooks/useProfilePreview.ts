import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useProfilePreview = (isOnboardingFinishing: boolean) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isLoading) {
      timer = setTimeout(() => {
        navigate("/");
      }, 5000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isLoading, navigate]);

  const startCollaborationHandler = () => {
    setIsLoading(true);
  };

  return {
    isLoading,
    startCollaborationHandler,
    isOnboardingFinishing,
  };
};
