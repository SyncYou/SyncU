import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Buttons({
  bIcon,
  bName,
  bText,
  bg,
  text,
  handleGoogleAuth,
}) {
  const isProduction = import.meta.env.VITE_MODE === "production";
  const navigate = useNavigate();
  // function handleEnter(e) {
  //   if (e === "Enter") {
  //     e.preventDefault();
  //   }
  // }

  const handleClick = async () => {
    if (isProduction) {
      if (bName === "Google") {
        const googleAuthUrl =
          "https://fashionhub.geoedu360.com/SignUpClassesPhp/GoogleAuth/signUp.php";

        window.location.href = googleAuthUrl;
      } else {
        console.log("Navigation disabled in development environment");
      }
    }
  };

  const handleRedirect = () => {
    const params = new URLSearchParams(window.location.search);
    const user = params.get("user");

    if (user) {
      const userData = JSON.parse(decodeURIComponent(user));
      console.log("User data received:", userData);

      // Handle the user data (e.g., store it, navigate to a different page, etc.)
      navigate("/"); // Redirect to the home page
    }
  };

  // Call this function on page load
  useEffect(() => {
    handleRedirect();
  }, []);

 
  return (
    <>
      <div
        onClick={handleClick}
        className="btn cursor-pointer"
        style={{ backgroundColor: bg, color: text }}
      >
        <img src={bIcon} alt={`${bName} icon`} /> {bText} {bName}
      </div>
    </>
  );
}
