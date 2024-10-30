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
      element: <Listedbooks></Listedbooks>,
    },
    {
      path: '/pagestoread',
      element: <Pagestoread></Pagestoread>,
    },
    {
      path: '/bookdetails/:id',
      element: <Bookdetails></Bookdetails>,
      loader: () => fetch('../public/data.json').then(res => res.json())
    }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
