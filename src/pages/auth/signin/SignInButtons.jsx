import React from "react";
import googleIcon from "../../../assets/img/Google.svg";
import githubIcon from "../../../assets/img/github.svg";
import facebookIcon from "../../../assets/img/facebook.svg";

const SignInButtons = ({handleLoginWithGoogle}) => {

  return (
    <div className="flex flex-col items-start gap-3 self-stretch">
      <button onClick={handleLoginWithGoogle} className="auth-button">
        <img src={googleIcon} alt="google-icon" />
        Continue with Google
      </button>
      <button className="auth-button">
        <img src={facebookIcon} alt="facebook-icon" />
        Continue with Facebook
      </button>
      <button className="auth-button">
        <img src={githubIcon} alt="github-icon" />
        Continue with Github
      </button>
    </div>
  );
};

export default SignInButtons;
