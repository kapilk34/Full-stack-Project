// import React from "react";
// import { createBrowserRouter } from "react-router-dom";
// import Outlet from "./Outlet";
// import Home from "../Pages/Home";
// import Products from "../Pages/Products";
// import AboutUs from "../Pages/AboutUs";
// import Contact from "../Pages/Contact";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Outlet />,
//     children: [
//       {
//         path: "/",
//         element: <Home />
//       },
//       {
//         path: "/products",
//         element: <Products />
//       },
//       {
//         path: "/aboutus",
//         element: <AboutUs />
//       },
//       {
//         path: "/contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])
// export default router


import React from "react";
import { createBrowserRouter } from "react-router-dom";
import OutletLayout from "./Outlet";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard";
import AdminDashboard from "../Pages/AdminDashboard";
import ProtectedRoute from "../Components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <OutletLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/aboutus", element: <AboutUs /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/adminDashboard",
    element: (
      <ProtectedRoute>
        <AdminDashboard />
      </ProtectedRoute>
    ),
  },
]);

export default router;
