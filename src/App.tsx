import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/router";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Router />
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
