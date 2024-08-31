import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Welcome } from '../components/Welcome.jsx';
import '../index.css';
import '../components/styles/circleStyles.css'
import '../components/styles/skeleton.css'
import '../components/styles/reusable.css';
import { Verify } from '../components/Verify.jsx';
import { Yourself } from '../components/Yourself.jsx';
import { Work } from '../components/Work.jsx';
import { Stack } from '../components/Stack.jsx';
import { Security } from '../components/Security.jsx';
import { Loader } from '../components/Loader.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
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

export function SignUp() {
  return <RouterProvider router={router} />
}
