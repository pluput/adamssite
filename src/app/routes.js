import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Article1 } from "../pages/article1/article1";
import { Article2 } from "../pages/article2/article2";

function AppRoutes() {
  return (
    // <Router>
    <div className="s_c">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/article1" element={<Article1 />} />
        <Route path="/portfolio/article2" element={<Article2 />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
    // </Router>
  );
}

export default AppRoutes;
