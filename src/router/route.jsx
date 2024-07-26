import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import InfoScreen from "../screens/InfoScreen";
import NotFound from "../screens/NotFound";
import TryScreen from "../screens/TryScreen";

export default function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/try" element={<TryScreen />} />
      <Route path="/info/:id" element={<InfoScreen />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
