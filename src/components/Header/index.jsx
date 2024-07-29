import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const name = "";
  return (
    <div className="border-b-[1px] flex items-center justify-center shadow-[#EAF1F6] shadow-2xl sticky z-50 top-0 bg-white">
      <div className="flex container items-center justify-around">
        <img
          src="https://www.quicksigorta.com/Content/images/logo_quicksigorta_1x.webp"
          alt="Quicksigorta Logo"
          className="h-16 cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        />
        <p className="text-[#EC1C74] text-xl cursor-pointer max-xl:hidden"  onClick={() => {
            navigate("/aninda-satin-al");
          }}>
          Anında Satın Al
        </p>
        <p className="text-[#1F3356] text-xl cursor-pointer max-xl:hidden"  onClick={() => {
            navigate("/hasar");
          }}>
          Hasar
        </p>
        <div className="flex flex-row items-center cursor-pointer max-xl:hidden" onClick={() => {
            navigate("/online-islemler");
          }}>
          <p className="text-[#1F3356] text-xl cursor-pointer" >
            Online İşlemler
          </p>
          <p className="bg-[#EC1C74] p-1 rounded-xl text-white mb-2 cursor-pointer">
            Yeni
          </p>
        </div>
        <p className="text-[#1F3356] text-xl cursor-pointer max-xl:hidden" onClick={() => {
            navigate("/acente");
          }}>
          Acente
        </p>
        <p className="text-[#1F3356] text-xl cursor-pointer max-xl:hidden" onClick={() => {
            navigate("/q-dunyasi");
          }}>
          Q Dünyası
        </p>
        <div className="flex flex-col gap-2 mb-2 max-xl:hidden">
          <p>{`Hoşgeldiniz, ${name}`}</p>
          <div className="flex flex-row items-center gap-2">
            <div className="bg-[#EC1C74] text-white py-1 px-3 rounded-lg text-lg cursor-pointer" onClick={() => {
            navigate("/bireysel-giris");
          }}>
              Bireysel Giriş
            </div>
            <div className="bg-[#1F3356] text-white py-1 px-3 rounded-lg text-lg cursor-pointer" onClick={() => {
            navigate("/acente-giris");
          }}>
              Acente Girişi
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
