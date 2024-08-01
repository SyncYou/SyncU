import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import './components/styles/reusable.css';
import { toast, Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Verify } from './components/Verify.jsx';
import { SignUp } from './components/SignUp.jsx';
import { element } from 'prop-types';
import { Yourself } from './components/Yourself.jsx';
import { Work } from './components/Work.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
      {
        path: "signUp",
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
      }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>,
)
