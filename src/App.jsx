import Layout from "./components/Layout"
import ProjectCollab from "./components/ProjectCollab";
import Sidebar from "./components/Sidebar"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <ProjectCollab/>
        },
      ]
    }
  ])

  return (
    <>
    <div className="flex gap-3">
      <div className="min-w-[263px] sticky top-0 left-0 max-h-dvh">
        <Sidebar/>
      </div>
      <div className="flex-1 border-l border-[#E5E7EB]">
      <RouterProvider router={router} />
      </div>
    </div>
    </>
  )
}

export default App
