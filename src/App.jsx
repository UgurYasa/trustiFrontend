import React, { useEffect } from "react";
import MainRoute from "./router/route";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearAll } from "./redux/firstStepSlice";
import { useQueryClient } from "@tanstack/react-query";
import { clearPrim } from "./redux/thirdStepSlice";

export default function App() {
  const { pathname } = useLocation();
  const dispacth = useDispatch();
  const queryClient = useQueryClient();

  useEffect(() => {
    window.scrollTo(0, 0);
    pathname === "/" && dispacth(clearAll());
    pathname === "/" && queryClient.clear();
    pathname === "/" && dispacth(clearPrim());
    pathname.split("/")[1] === "info" &&
      pathname.split("/")[2] === "1" &&
      dispacth(clearPrim());
    pathname.split("/")[1] === "info" &&
      pathname.split("/")[2] === "2" &&
      dispacth(clearPrim());
  }, [pathname]);
  return <MainRoute />;
}
