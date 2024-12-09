import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/HomeLayout";
import ProjectContainer from "./pages/HomePage/components/ProjectContainer";
import ProfileProgress from "./pages/HomePage/components/ProfileProgress";
import Activity from "./pages/ActivityPage/Activity";
import Projects from "./pages/ProjectPage/Projects";

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
        element: <Projects />,
      },
      {
        path: "/alert",
        element: <Activity />,
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
