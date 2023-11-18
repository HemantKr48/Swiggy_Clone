/**
 * Header
 *      Logo
 *      Nav Bar Items(Home, About Us, Contact,Cart)
 *
 * Body
 *     Search Bar
 *     Restaurant Cards(separate Components)
 *
 * Footer
 *      Copyright
 */

import React from "react";
import ReactDOM from "react-dom/client";
import "./app.css";
import { Header } from "./src/Components/Header";
import { Body } from "./src/Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/Components/About";
import Error from "./src/Components/Error";
import Contact from "./src/Components/Contact";
import Profile from "./src/Components/Profile";
import RestaurantDetails from "./src/Components/RestaurantDetails";

import { Footer } from "./src/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetails />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

root.render(<RouterProvider router={appRouter} />);
