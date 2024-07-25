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
    {/* <div className="flex gap-3">
      <div className="min-w-[263px] sticky top-0 left-0 max-h-dvh">
        <Sidebar/>
      </div>
      <div className="flex-1 border-l border-[#E5E7EB]">
      <ProjectCollab/>
      </div>
    </div> */}
    </>
  )
}

export default App
