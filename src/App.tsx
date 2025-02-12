import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import RootLayout from "./Layout/RootLayout.js";
import OnboardingLayout from "./Layout/OnboardingLayout.tsx";
import ProfileLayout from "./Layout/ProfileLayout.tsx";
import Layout from "./pages/HomeLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Loading } from "./components/Reuseables/Loading.tsx";
import { AuthProvider } from "./providers/AuthProvider.tsx";
// import { AuthProvider } from "./providers/AuthProvider.tsx";

const TellUsAboutYourself = lazy(
  () => import("./components/Profile/Tell-us-about-yourself")
);
const User_LeftFill1 = lazy(
  () => import("./components/Profile/Step3/User_LeftFill1.tsx")
);
const LeftFill_2 = lazy(
  () => import("./components/Profile/Step4/LeftFill_2.tsx")
);
const LeftFill_3 = lazy(
  () => import("./components/Profile/Final_step/LeftFill_3.tsx")
);
const Finishing = lazy(
  () => import("./components/Profile/Finishing/Finishing.tsx")
);
const Verifymail = lazy(() => import("./components/Auth/Verify-mail.tsx"));
const Username = lazy(() => import("./components/Profile/Username.tsx"));
const SetUpYourProfile = lazy(
  () => import("./components/Profile/Set-up-your-profile.tsx")
);
const ProjectContainer = lazy(
  () => import("./components/Home/ProjectContainer.tsx")
);
const Activity = lazy(() => import("./pages/Activity/Activity.tsx"));
const Projects = lazy(() => import("./pages/Project/Projects.tsx"));
const Profile = lazy(() => import("./pages/Profile/Profile.tsx"));

const client = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/onboarding",
    element: 
    <AuthProvider>
      <RootLayout />
    </AuthProvider>,
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
    element: 
    <AuthProvider>
      <Layout />
    </AuthProvider>,
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
    element: 
    <AuthProvider>
      <OnboardingLayout />
    </AuthProvider>,
  },
  {
    path: "/auth/login",
    element:  <AuthProvider>
    <OnboardingLayout />
  </AuthProvider>,
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
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  );
};

export default App;
