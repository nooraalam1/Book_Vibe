import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Maindiv from './Components/Maindiv';
import Home from './Components/Home';
import Listedbooks from './Components/Listedbooks';
import Pagestoread from './Components/Pagestoread';
import Bookdetails from './Components/Bookdetails';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import AuthProvider from './Components/AuthProvider';
import PrivateRoute from '../PrivateRoute';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Maindiv></Maindiv>,
    children: [{
      path: "/",
      element: <Home></Home>,
      loader: () => fetch("../public/data.json")
    },
    {
      path: '/listedbooks',
      element: <PrivateRoute><Listedbooks></Listedbooks></PrivateRoute>,
    },
    {
      path: '/pagestoread',
      element: <PrivateRoute><Pagestoread></Pagestoread></PrivateRoute>,
    },
    {
      path: '/bookdetails/:id',
      element: <Bookdetails></Bookdetails>,
      loader: () => fetch('../public/data.json').then(res => res.json())
    },
    {
      path: '/signup',
      element: <Signup></Signup>
    },
    {
      path: '/signin',
      element: <Signin></Signin>

    }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
