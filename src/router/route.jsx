import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../components/Loading"; // Loading componentini buraya import et

// Sayfa bileşenlerini tembel yükleme
const HomeScreen = lazy(() => import("../screens/HomeScreen"));
const InfoScreen = lazy(() => import("../screens/InfoScreen"));
const NotFound = lazy(() => import("../screens/NotFound"));
const TryScreen = lazy(() => import("../screens/TryScreen"));
const TempScreen = lazy(() => import("../screens/TempScreen"));

export default function MainRoute() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/try" element={<TryScreen />} />
        <Route path="/temp" element={<TempScreen />} />
        <Route path="/info/:id" element={<InfoScreen />} />
        <Route path="/info/:id/:customer_No" element={<InfoScreen />} />
        <Route path="/info/:id/:customer_No/:filterVar" element={<InfoScreen />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
