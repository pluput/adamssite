import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, useLocation } from "react-router-dom";
import AppRoutes from "./routes"; // Ensure this import is correct
import Headermain from "../header";
import "./App.css";

function ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop>
        <Headermain />
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}
