import React, { useState } from "react";
import { FAMILIES, AGES } from "../../../constants/FirstStep";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Select from "../Select";
import Checkbox from "./CheckBox";
import { useSelector } from "react-redux";

export default function CheckBoxDropdown() {
  const [subSelected, setsubSelected] = useState("Seçiniz");
  const [isHeaderMenuOpen, setIsHeaderMenuOpen] = useState(false);
  const {isCheckBoxSelected} = useSelector((state) => state.firstStep);
  

  return (
    <div className="flex flex-col relative w-full">
      <p>Gender</p>

      <div
        className="bg-white rounded-lg cursor-pointer font-semibold flex flex-row items-center justify-between  h-10 px-2"
        onClick={() => {
          setIsHeaderMenuOpen(!isHeaderMenuOpen);
        }}
      >
        <span className="text-base">{subSelected}</span>
        <span>
          <MdOutlineKeyboardArrowDown />
        </span>
      </div>
      <div
        className={`bg-white border-[1px] py-2 absolute mt-16 overflow-auto w-full h-60  flex flex-col gap-2 ${
          isHeaderMenuOpen ? "visible" : "invisible"
        }`}
      >
        {FAMILIES.map((item) => (
          <div
            key={item.id}
            className={`bg-white cursor-pointer font-semibold gap-2 px-3 py-1 ${
              item.id === 0 ? "hidden" : "block"
            } `}
          >
            <Checkbox item={item} />
            {item.id === FAMILIES.length - 1 && (
              <div>
                <div className="w-full bg-slate-400 h-[1px] my-2" />
                <div className="w-full h-10 my-2 flex items-center justify-end">
                  <button className="w-1/2 bg-[#EB1C74] h-full flex items-center justify-center rounded-md text-white font-semibold">Seçimleri Tamamla</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
