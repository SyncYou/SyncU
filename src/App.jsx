import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error/ErrorPage";
import SignIn from "./pages/auth/signin/SignIn";
import Password from "./pages/auth/signin/Password";

const router = createBrowserRouter([
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
