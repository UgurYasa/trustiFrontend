import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import InfoScreen from "../screens/InfoScreen";

export default function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/info/:id" element={<InfoScreen />} />
    </Routes>
  );
}
