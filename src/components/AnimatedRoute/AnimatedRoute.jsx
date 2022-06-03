import React from "react";
import About from "../../pages/about/About";
import Home from "../../pages/home/Home";
import NoPage from "../../pages/NoPage"
import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

const AnimatedRoute = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoute;
