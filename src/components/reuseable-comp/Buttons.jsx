import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Buttons({ bIcon, bName, bText, bg, text, handleGoogleAuth }) {
  const isProduction = import.meta.env.VITE_MODE === 'production';
  const navigate = useNavigate()
  // function handleEnter(e) {
  //   if (e === "Enter") {
  //     e.preventDefault();
  //   }
  // }

  const handleClick = async () => {
    if (isProduction) {
      // Open the Google authentication URL in a new window
      const googleAuthWindow = window.open('https://fashionhub.geoedu360.com/SignUpClassesPhp/GoogleAuth/signUp.php', '_blank', 'noopener,noreferrer');
      
      // Wait for the Google authentication to complete
      if (googleAuthWindow) {
        // Check periodically if the window has closed and then navigate to the home page
        const interval = setInterval(() => {
          if (googleAuthWindow.closed) {
            clearInterval(interval);
            navigate('/'); // Redirect to the home page
          }
        }, 1000);
      }
    } else {
      console.log('Navigation disabled in development environment');
    }
  };
  return (
    <>
      <button onClick={handleCLick}   className='btn ' style={{ backgroundColor: bg, color: text }} >
        <img src={bIcon} alt={`${bName} icon`} /> {bText} {bName}
      </button>
    </>
  )
}
