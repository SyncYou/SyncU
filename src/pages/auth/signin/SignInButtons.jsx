import React from "react";
import googleIcon from "../../../assets/img/Google.svg";
import githubIcon from "../../../assets/img/github.svg";
import facebookIcon from "../../../assets/img/facebook.svg";

const SignInButtons = () => {
  return (
    <div className="flex flex-col items-start gap-3 self-stretch">
      <div className="auth-button cursor-pointer">
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
