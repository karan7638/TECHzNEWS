import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Footer from './components/Footer.jsx'

import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './components/Home.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
import ErrorPage from './components/ErrorPage.jsx';
import NewsDetails from './components/NewsDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/details',
        element: <NewsDetails />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/tech',
        element: <Home />,
      },
      {
        path: '/contact_us',
        element: <Footer />,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-ann2f2md74ad8yp2.us.auth0.com"
    clientId="jmUdn2J9VoihjkqAgx0kBjNp6qYrmNCB"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <RouterProvider router={router} />
  </Auth0Provider>
)
