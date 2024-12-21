import OnboardingLayout from "./Layout/OnboardingLayout";
import Verifymail from "./components/Auth/Verify-mail";
import TellUsAboutYourself from "./components/Profile/Tell-us-about-yourself";
import ProfileLayout from "./Layout/ProfileLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./components/styles/ScrollBar.css";
import RootLayout from "./Layout/RootLayout.js";
import User_Body from "./pages/SignUp/User_Profile/User_Body.tsx";
import { User_LeftFill1 } from "./pages/SignUp/Step3/User_LeftFill1";
import { LeftFill_2 } from "./pages/SignUp/Step4/LeftFill_2";
import { LeftFill_3 } from "./pages/SignUp/Final_step/LeftFill_3";
import { Finishing } from "./pages/SignUp/Finishing/Finishing";

// Defining the router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <User_Body />,
        children: [
          {
            path: "/",
            element: <User_LeftFill1 />,
          },
          {
            path: "/step4",
            element: <LeftFill_2 />,
          },
          {
            path: "/final-step",
            element: <LeftFill_3 />,
          },
          {
            path: "/finishing",
            element: <Finishing />,
          },
        ],
      },
    ],
  },

  {
    path: "/auth/signup",
    element: <OnboardingLayout />,
  },
  {
    path: "/onboarding",
    element: <ProfileLayout />,
    children: [
      {
        path: "tell-us-about-yourself",
        element: <TellUsAboutYourself />,
      },
    ],
  },
  {
    path: "/verify-email",
    element: <Verifymail />,
  },
]);

// Main App component
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
