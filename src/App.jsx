import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error/ErrorPage";
import SignIn from "./pages/auth/signin/SignIn";
import Password from "./pages/auth/signin/Password";
import ProjectCollab from "./components/ProjectCollab";
import { Home, Profile } from "./pages";
import ResetPassword from "./pages/auth/resetPassword/ResetPassword";

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
        path: "/profile",
        element: <Profile />,
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
