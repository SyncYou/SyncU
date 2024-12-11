import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import './components/styles/ScrollBar.css'
import RootLayout from './pages/layout/RootLayout.jsx'
import User_Body from './pages/SignUp/User_Profile/User_Body.jsx'
import { User_LeftFill1 } from './pages/SignUp/Step3/User_LeftFill1.jsx'
import { LeftFill_2 } from './pages/SignUp/Step4/LeftFill_2.jsx'
import { LeftFill_3 } from './pages/SignUp/Final_step/LeftFill_3.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [{
      path: '/',
      element: <User_Body />,
      children: [
        {
          path: "/",
          element: <User_LeftFill1 />
        },
        {
          path: "/step4",
          element: <LeftFill_2 />
        },
        {
          path: "/final-step",
          element: <LeftFill_3 />
        }

      ]
    }]
  },


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
