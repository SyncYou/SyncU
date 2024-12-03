import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import ProjectContainer from "./components/ProjectContainer";
import Home from "./pages/HomePage/Home";
import ProfileProgress from "./components/ProfileProgress";

const router = createBrowserRouter([
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
        element: <Home />,
      },
      {
        path: "/alert",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <ProfileProgress />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
