import React from "react";
import googleIcon from "../../../assets/img/Google.svg";
import githubIcon from "../../../assets/img/github.svg";
import facebookIcon from "../../../assets/img/facebook.svg";

const SignInButtons = () => {
  const isProduction = import.meta.env.VITE_MODE === "production";

  const handleLoginWithGoogle = async () => {
    if (isProduction) {
      // Open the Google authentication URL in a new window
      const googleAuthWindow = window.open(
        "https://fashionhub.geoedu360.com/SignUpClassesPhp/GoogleAuth/signIn.php",
        "_blank",
        "noopener,noreferrer"
      );

      // Wait for the Google authentication to complete
      if (googleAuthWindow) {
        // Check periodically if the window has closed and then navigate to the home page
        const interval = setInterval(() => {
          if (googleAuthWindow.closed) {
            clearInterval(interval);
            navigate("/"); // Redirect to the home page
          }
        }, 1000);
      } else {
        console.log("Navigation disabled in development environment");
      }
    }
  };

  return (
    <div className="flex flex-col items-start gap-3 self-stretch">
      <div
        onClick={handleLoginWithGoogle}
        className="auth-button cursor-pointer"
      >
        <img src={googleIcon} alt="google-icon" />
        Continue with Google
      </div>
      <div className="auth-button cursor-pointer">
        <img src={facebookIcon} alt="facebook-icon" />
        Continue with Facebook
      </div>
      <div className="auth-button cursor-pointer">
        <img src={githubIcon} alt="github-icon" />
        Continue with Github
      </div>
    </div>
  );
};

export default SignInButtons;
