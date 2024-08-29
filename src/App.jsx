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
import Announcements from "./components/Workspace/Announcements";
import ManageProjects from "./components/ManageProjects/ManageProjects";
import CreateProject from "./components/ManageProjects/CreateProject";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ProjectCollab />
      },
      {
        path: "/:id",
        element: <ProjectDescription/>
      },
      {
        path: "/profile",
        element: <Profile />,
        children: [
          {
            path: '/profile',
            element: <ProfileOverview />,
          },
          {
            path: '/profile/showcased-projects',
            element: <ShowcasedProjects />,
          },
          {
            path: '/profile/working-on',
            element: <WorkingOn />,
          },
          {
            path: '/profile/activities',
            element: <Activities />,
          }
        ]
      },
      {
        path: "/manage",
        element: <ManageProjects />,
       children: [
        {
          path: '/manage/create-project',
          element: <CreateProject/>
        }   
       ]
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
    path: "/signIn/password",
    element: <Password />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/resetPassword",
    element: <ResetPassword />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/workspace/:id",
    element: <Workspace />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/workspace/:id",
        element: <Announcements />
      }
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
