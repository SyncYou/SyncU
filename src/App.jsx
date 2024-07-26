import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectCollab from "./components/ProjectCollab";
import { Home, Profile } from "./pages";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      children: [
        {
          path: '/',
          element: <ProjectCollab/>
        },
        {
          path: '/profile',
          element: <Profile/>
        },
      ]
    }
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
