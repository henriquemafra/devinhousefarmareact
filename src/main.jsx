import './index.css';

import React, { Children } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import { ThemeProvider } from './components/context/ThemeContext.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Medicamentos from './components/router/Medicamentos';
import LoginPage from './components/router/LoginPage';
import SignUp from './components/router/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
      path: "/medicamentos",
      element: <Medicamentos />,
      },
      {
        path: "/loginpage",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
