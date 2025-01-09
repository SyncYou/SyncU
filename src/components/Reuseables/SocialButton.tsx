import React from "react";
import { signInWithGithub, signInWithGoogle, getLoggedInUser } from "../../utils/AuthRequest";

interface Props {
  icon: string;
  label: string;
}

const SocialButton: React.FC<Props> = ({ icon, label }) => {
  const handleAuth = async () => {
    if (label == "continue with Github") {
      const { data, error } = await signInWithGithub();
      const user = await getLoggedInUser()
      localStorage.setItem("loggedInUser", JSON.stringify(user))
      console.log(data, error);
    } else if (label == "continue with Google") {
      const { data, error } = await signInWithGoogle();
      const user = await getLoggedInUser()
      localStorage.setItem("loggedInUser", JSON.stringify(user))
      console.log(data, error);
      
    }
  };

  return (
    <div
      onClick={handleAuth}
      className="flex items-center gap-5 justify-center border border-light rounded-full p-4 md:p-3 cursor-pointer"
    >
      <img src={icon} alt="google" />
      <p className="text-secondary font-medium text-[18px] leading-6 text-center">
        {label}
      </p>
    </div>
  );
};

export default SocialButton;
