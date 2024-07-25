import React from "react";
import SecondSection from "../SecondSection";
import { formatNumber } from "../../../constants/Functions";

export default function ThirdSection({ item }) {
  console.log(item);
  return (
    <div>
      <SecondSection />
      {item.amount > 0 && (
        <div className="grid grid-cols-2 gap-2 my-3">
          <p className="text-[#EB1C74] text-lg font-semibold col-span-2">
            Prim
          </p>
          <p className=" text-base font-semibold col-span-1 flex items-center">{item.proximity}</p>
          <p className=" text-base font-semibold col-span-1 flex items-center justify-end">{item.amount} TL</p>
        </div>
      )}
      <div className="w-full px-4 py-2 bg-[#E8EAFF] shadow-xl">
        <p>{item.title}</p>
        <p className="text-lg font-bold text-slate-500">
          {formatNumber(item.amount)} TL
        </p>
      </div>
    </div>
  );
}
