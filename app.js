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

import { Footer } from "./src/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

root.render(<App />);
