import TellUsAboutYourself from "./components/Profile/Tell-us-about-yourself";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import RootLayout from "./Layout/RootLayout.js";
import { User_LeftFill1 } from "./components/Profile/Step3/User_LeftFill1.tsx";
import { LeftFill_2 } from "./components/Profile/Step4/LeftFill_2.tsx";
import { LeftFill_3 } from "./components/Profile/Final_step/LeftFill_3.tsx";
import { Finishing } from "./components/Profile/Finishing/Finishing.tsx";
import OnboardingLayout from "./Layout/OnboardingLayout.tsx";
import Verifymail from "./components/Auth/Verify-mail.tsx";
import Username from "./components/Profile/Username.tsx";
import ProfileLayout from "./Layout/ProfileLayout.tsx";
import SetUpYourProfile from "./components/Profile/Set-up-your-profile.tsx";
import Layout from "./pages/HomeLayout";
import ProjectContainer from "./components/Home/ProjectContainer.tsx";
import Activity from "./pages/Activity/Activity.tsx";
import Projects from "./pages/Project/Projects.tsx";
import Profile from "./pages/Profile/Profile.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/onboarding",
    element: <RootLayout />,
    children: [
      {
        path: "",
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
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <ProjectContainer />,
      },
      {
        path: "project",
        element: <Projects />,
      },
      {
        path: "alert",
        element: <Activity />,
      },
      {
        path: "profile",
        element: <Profile />,
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
  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
