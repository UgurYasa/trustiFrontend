import React from "react";
import { calculateAge, censorWords } from "../../../constants/Functions";
import { FAMILYMEMBER } from "../../../constants/SecondStep";

export default function SecondSection() {
  return (
    <div className="py-4 bg-white max-lg:p-2">
      <p className="text-[#EB1C74] text-lg font-semibold">Sigortalılar</p>
      <div className="grid grid-cols-6">
        <p className="2xl:col-span-3 col-span-6 flex items-center">
          {censorWords(FAMILYMEMBER[1].name)}
        </p>
        <p className="2xl:col-span-2 xl:col-span-3 col-span-6 flex justify-center">
          {calculateAge(FAMILYMEMBER[1].birthDate)} Yaş
        </p>
        <p className="2xl:col-span-1 xl:col-span-3 col-span-6 flex justify-center">
          {FAMILYMEMBER[1].proximity}
        </p>
      </div>

      <p className="text-[#EB1C74] text-lg font-semibold">Adres</p>
    <p>{censorWords(FAMILYMEMBER[1].address)}</p>
    </div>
  );
}
