import TellUsAboutYourself from "./components/Profile/Tell-us-about-yourself";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./components/styles/ScrollBar.css";
import RootLayout from "./Layout/RootLayout.js";
import { User_LeftFill1 } from "./pages/SignUp/Step3/User_LeftFill1";
import { LeftFill_2 } from "./pages/SignUp/Step4/LeftFill_2";
import { LeftFill_3 } from "./pages/SignUp/Final_step/LeftFill_3";
import { Finishing } from "./pages/SignUp/Finishing/Finishing";
import OnboardingLayout from "./Layout/OnboardingLayout.tsx";
import Verifymail from "./components/Auth/Verify-mail.tsx";
import Username from "./components/Profile/Username.tsx";
import ProfileLayout from "./Layout/ProfileLayout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/onboarding",
        element: <ProfileLayout />,
        children: [
          {
            path: "tell-us-about-yourself",
            element: <TellUsAboutYourself />,
          },
          {
            path: "username",
            element: <Username />,
          },
          {
            path: "area-of-expertise",
            element: <User_LeftFill1 />,
          },
          {
            path: "stack",
            element: <LeftFill_2 />,
          },
          {
            path: "profile-image",
            element: <LeftFill_3 />,
          },
          {
            path: "finishing",
            element: <Finishing />,
          },
        ],
      },
     
    ],
  },
  {
    path: "/auth/signup",
    element: <OnboardingLayout/>,
  },
  {
    path: "/auth/login",
    element: <OnboardingLayout/>,
  },
  {
    path: "/auth/verify-email",
    element: <Verifymail/>,
  }

]);

// Main App component
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
