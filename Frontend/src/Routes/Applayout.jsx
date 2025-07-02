import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Outlet from "./Outlet";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact";


// const Home = React.lazy(() => import("../Pages/Home"));
// const Products = React.lazy(() => import("../Pages/Products")); 
// const ProductDetails = React.lazy(() => import("../Pages/ProductDetails"));
// const Contact = React.lazy(() => import("../Pages/Contact"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/aboutus",
        element: <AboutUs />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
])
export default router