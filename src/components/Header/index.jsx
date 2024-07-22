import React from "react";

export default function Header() {
  const name = "";
  return (
    <div className="border-b-[1px] h-28 px-20 p-2 flex items-center justify-center">
      <div className="flex 2xl:w-2/3 w-full items-center justify-around">
        <img
          src="https://www.quicksigorta.com/Content/images/logo_quicksigorta_1x.webp"
          alt="Quicksigorta Logo"
          className="h-20 cursor-pointer"
        />
        <p className="text-[#EC1C74] text-xl cursor-pointer max-xl:hidden">
          Anında Satın Al
        </p>
        <p className="text-[#1F3356] text-xl cursor-pointer max-xl:hidden">
          Hasar
        </p>
        <div className="flex flex-row items-center cursor-pointer max-xl:hidden">
          <p className="text-[#1F3356] text-xl cursor-pointer">
            Online İşlemler
          </p>
          <p className="bg-[#EC1C74] p-1 rounded-xl text-white mb-2 cursor-pointer">
            Yeni
          </p>
        </div>
        <p className="text-[#1F3356] text-xl cursor-pointer max-xl:hidden">
          Acente
        </p>
        <p className="text-[#1F3356] text-xl cursor-pointer max-xl:hidden">
          Q Dünyası
        </p>
        <div className="flex flex-col gap-2 mb-2 max-xl:hidden">
          <p>{`Hoşgeldiniz, ${name}`}</p>
          <div className="flex flex-row items-center gap-2">
            <div className="bg-[#EC1C74] text-white py-1 px-3 rounded-lg text-lg cursor-pointer">
              Bireysel Giriş
            </div>
            <div className="bg-[#1F3356] text-white py-1 px-3 rounded-lg text-lg cursor-pointer">
              Acente Girişi
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
