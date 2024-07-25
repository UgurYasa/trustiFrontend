import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { COLLATERALDETAILS } from "../../constants/SecondStep";
export default function CollateralDetails({ value, color, isInpatient }) {
  const Header = () => {
    return (
      <div className="grid grid-cols-4 mt-4 border-2">
        <div
          className="col-span-2  flex flex-row justify-between items-end p-3 border-[1px] border-slate-300"
          style={{ backgroundColor: color }}
        >
          <p className="text-white">Teminatlar</p>
          <div className=" px-1 rounded-full bg-white flex items-center justify-center">
            {value}
          </div>
        </div>
        <div
          className="col-span-1 container text-white text-center border-[1px] border-slate-300"
          style={{ backgroundColor: isInpatient ? color : "#7E7E7E" }}
        >
          Yatarak Tedavi
        </div>
        <div
          className="col-span-1 container text-white text-center border-[1px] border-slate-300"
          style={{ backgroundColor: !isInpatient ? color : "#7E7E7E" }}
        >
          Yatarak ve Ayakta Tedavi
        </div>
      </div>
    );
  };
  const Card = ({ item }) => {
    return (
      <div className="grid grid-cols-4">
        <div className="col-span-2  flex flex-row justify-between items-end p-3 border-[1px] border-slate-300">
          <p className="font-semibold">{item.label} </p>
          <p className="font-semibold cursor-pointer"> &#62;</p>
        </div>
        <div
          className={`col-span-1 container flex items-center justify-center border-[1px] border-slate-300 ${
            isInpatient && "bg-slate-200"
          }`}
        >
          {item.value[0] === "Limitsiz" ? (
            <p>Limitsiz</p>
          ) : item.value[0] === "Cancel" ? (
            <CancelIcon className="text-red-600" />
          ) : (
            <CheckCircleIcon className="text-green-500" />
          )}
        </div>
        <div
          className={`col-span-1 container flex items-center justify-center border-[1px] border-slate-300 ${
            !isInpatient && "bg-slate-200"
          }`}
        >
          {item.value[0] === "Limitsiz" ? (
            <p>Limitsiz</p>
          ) : item.value[0] === "Cancel" ? (
            <CancelIcon className="text-red-600" />
          ) : (
            <CheckCircleIcon className="text-green-500" />
          )}
        </div>
      </div>
    );
  };
  return (
    <div className="w-full h-full">
      <Header />
      {COLLATERALDETAILS.map((item) => (
        <Card item={item} />
      ))}
    </div>
  );
}
