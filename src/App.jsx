import React, { useEffect } from "react";
import MainRoute from "./router/route";
import { useLocation } from "react-router-dom";

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <MainRoute />;
}
