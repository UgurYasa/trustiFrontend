import React from "react";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { GiPlayButton } from "react-icons/gi";

export const FrontCard = ({ fname, lname, cardNo, expdate, setClicked }) => {
  return (
    <div className="grid grid-rows-5 xl:w-1/2 w-full h-52 border-[1px] border-black rounded-xl bg-slate-500 text-white">
      <div className="row-span-2 w-full rounded p-5 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <BsCreditCard2FrontFill className="text-4xl" />
          <p className="xl:text-2xl font-black ">CREDIT CARD</p>
        </div>
        <GiPlayButton
          className="text-2xl cursor-pointer"
          onClick={() => setClicked(true)}
        />
      </div>
      <div className="row-span-1 w-full flex items-center p-5 px-10">
        {cardNo === "" ? "XXXX-XXXX-XXXX-XXXX" : cardNo}
      </div>
      <div className="row-span-1 w-full  flex items-center justify-center">
        {expdate}
      </div>
      <div className="row-span-1 w-full  flex items-center p-5">
        {fname === "" ? "AD" : fname} {lname === "" ? "SOYAD" : lname}
      </div>
    </div>
  );
};
