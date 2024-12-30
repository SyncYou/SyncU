import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/HomeLayout";
import ProjectContainer from "./pages/HomePage/components/ProjectContainer";
import Activity from "./pages/ActivityPage/Activity";
import Projects from "./pages/ProjectPage/Projects";
import Profile from "./pages/ProfilePage/Profile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
        element: <Profile />,
      },
    ],
  },
]);

const client = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={client}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
