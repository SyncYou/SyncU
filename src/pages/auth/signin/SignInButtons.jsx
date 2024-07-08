import React from "react";
import googleIcon from "../../../assets/img/Google.svg";
import githubIcon from "../../../assets/img/github.svg";
import facebookIcon from "../../../assets/img/facebook.svg";

const SignInButtons = () => {
  return (
    <div className="flex flex-col items-start gap-3 self-stretch">
      <button className="auth-button">
        <img src={googleIcon} />
        Continue with Google
      </button>
      <button className="auth-button">
        <img src={facebookIcon} />
        Continue with Facebook
      </button>
      <button className="auth-button">
        <img src={githubIcon} />
        Continue with Github
      </button>
    </div>
  );
};

export default SignInButtons;
