import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, useLocation } from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes"; // Ensure this import is correct
import Headermain from "../header";
import "./App.css";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  const [isCursorVisible, setIsCursorVisible] = useState(true); // You can remove this if you're not using the cursor

  return (
    <HashRouter>
      <ScrollToTop>
        <Headermain />
        <AppRoutes /> {/* This is where your routes are rendered */}
      </ScrollToTop>
    </HashRouter>
  );
}