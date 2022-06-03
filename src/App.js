import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter } from "react-router-dom";
import AnimatedRoute from "./components/AnimatedRoute/AnimatedRoute";

function App() {
  // const location = useLocation();
  return (
    <>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Navbar />
        <AnimatedRoute />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
