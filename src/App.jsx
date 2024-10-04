import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error/ErrorPage";
import SignIn from "./pages/auth/signin/SignIn";
import Password from "./pages/auth/signin/Password";
import ProjectCollab from "./components/ProjectCollab";
import { Home, Profile, Workspace } from "./pages";
import EditProfile from "./components/Profile/EditProfile";
import ResetPassword from "./pages/auth/resetPassword/ResetPassword";
import ProfileOverview from "./components/Profile/ProfileOverview";
import ShowcasedProjects from "./components/Profile/ShowcasedProjects";
import WorkingOn from "./components/Profile/WorkingOn";
import Activities from "./components/Profile/Activities";
import ProjectDescription from "./components/ProjectDescription";
import WorkspaceRoom from "./components/Workspace/WorkspaceRoom";
import { SignUp } from "./pages/SignUp.jsx";
import "./components/styles/circleStyles.css";
import "./components/styles/skeleton.css";
import "./components/styles/reusable.css";
import { Verify } from "./components/Verify.jsx";
import { Yourself } from "./components/Yourself.jsx";
import { Work } from "./components/Work.jsx";
import { Stack } from "./components/Stack.jsx";
import { Security } from "./components/Security.jsx";
import { Loader } from "./components/Loader.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ProjectCollab />,
      },
      {
        path: "/:id",
        element: <ProjectDescription />,
      },
      {
        path: "/profile",
        element: <Profile />,
        children: [
          {
            path: "/profile",
            element: <ProfileOverview />,
          },
          {
            path: "/profile/showcased-projects",
            element: <ShowcasedProjects />,
          },
          {
            path: "/profile/working-on",
            element: <WorkingOn />,
          },
          {
            path: "/profile/activities",
            element: <Activities />,
          },
        ],
      },
      {
        path: "/edit-profile",
        element: <EditProfile />,
      },
    ],
  },

  {
    path: "/signIn",
    element: <SignIn />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/verify",
    element: <Verify />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/yourself",
    element: <Yourself />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/stack",
    element: <Stack />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/work",
    element: <Work />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/security",
    element: <Security />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signIn/password",
    element: <Password />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/loader",
    element: <Loader />,
    errorElement: <ErrorPage />,
  },

  // {
  //   path: "/security",
  //   element: <Security />,
  //   errorElement: <ErrorPage />,
  // },
  {
    path: "/resetPassword",
    element: <ResetPassword />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/workspace//id",
    element: <Workspace />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/workspace/id",
        element: <WorkspaceRoom />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
