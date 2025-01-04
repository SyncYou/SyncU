
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/HomeLayout";
import ProjectContainer from "./pages/HomePage/components/ProjectContainer";
import Activity from "./pages/ActivityPage/Activity";
import Projects from "./pages/ProjectPage/Projects";
import Profile from "./pages/ProfilePage/Profile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";



const client = new QueryClient();

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
import SetUpYourProfile from "./components/Profile/Set-up-your-profile.tsx";

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
          {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ProjectContainer />,
      },
      {
        path: "/project",
        element: <Projects />,
      },
      {
        path: "/alert",
        element: <Activity />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
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
    path: "/auth/login",
    element: <OnboardingLayout />,
  },
  {
    path: "/auth/verify-email",
    element: <Verifymail />,
  },
  {
    path: "/auth/set-up-your-profile",
    element: <SetUpYourProfile />,
  },
]);

// Main App component
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
