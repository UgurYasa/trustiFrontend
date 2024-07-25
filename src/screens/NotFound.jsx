import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col w-screen h-screen bg-slate-600">
      <Header />
      <div className="flex flex-col w-full h-full items-center justify-center">
      <h1 className="font-black xl:text-6xl md:text-3xl text-lg text-white">404 Not Found</h1>
      <h3 className="font-semibold xl:text-xl md:text-lg text-base text-white">Aradığınız sayfa bulunmamaktadır</h3>
      <Link to="/" className="py-3 px-5 my-4 bg-[#EB1C74] rounded-xl text-white font-bold text-xl"> Ana Sayfaya Dön</Link>
      </div>
    </div>
  );
}
