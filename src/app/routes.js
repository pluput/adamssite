import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { PortfolioItemPage } from "../pages/portfolioItemPage"; // Import the new PortfolioItemPage
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";

function AppRoutes() {
  return (
    <div className="s_c">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<PortfolioItemPage />} /> {/* Dynamic route for portfolio item */}
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
