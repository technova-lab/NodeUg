import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './pages/login.jsx'

import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import PageNotFound from './pages/pageNotFound'
import Landing from './pages/landing'
import DashBoard from './pages/dashboard'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <PageNotFound/>
  },
  {
    path: "/login",
    element: <Login/>,
    errorElement: <PageNotFound/>
  },
  {
    path: "/signup",
    element: <Login/>,
    errorElement: <PageNotFound/>
  },
  {
    path: "/dashboard",
    element: <DashBoard/>,
    // errorElement: <PageNotFound/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
