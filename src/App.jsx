import React from "react";
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SignUp } from "./pages/SignUp.jsx";
import './components/styles/circleStyles.css'
import './components/styles/skeleton.css'
import './components/styles/reusable.css';
import { Verify } from './components/Verify.jsx';
import { Yourself } from './components/Yourself.jsx';
import { Work } from './components/Work.jsx';
import { Stack } from './components/Stack.jsx';
import { Security } from './components/Security.jsx';
import { Loader } from './components/Loader.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/verify",
    element: <Verify />
  },
  {
    path: "/yourself",
    element: <Yourself />
  },
  {
    path: "/work",
    element: <Work />
  },
  {
    path: "/stack",
    element: <Stack />
  },
  {
    path: "/security",
    element: <Security />
  },
  {
    path: "/loader",
    element: <Loader />
  }

]);

function App() {
  return <RouterProvider router={router} />
}

export default App
