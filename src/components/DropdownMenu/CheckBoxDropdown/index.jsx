import React, { useEffect, useState } from "react";
import { FAMILIES } from "../../../constants/FirstStep";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Checkbox from "./CheckBox";
import { useDispatch, useSelector } from "react-redux";
import {
  setOpenCheckBoxSelected,
  closeOther,
} from "../../../redux/firstStepSlice";

export default function CheckBoxDropdown() {
  const { isCheckBoxSelected, OpenCheckBoxSelected } = useSelector(
    (state) => state.firstStep
  );
  const dispatch = useDispatch();
  let Label =
    isCheckBoxSelected.length === 1
      ? isCheckBoxSelected[0]
      : isCheckBoxSelected.slice(0, -1).join(",");
  useEffect(() => {
    Label = isCheckBoxSelected.slice(0, -1).join(",");
  }, [isCheckBoxSelected]);

  return (
    <div className="flex flex-col relative w-full">
      <p>Gender</p>

      <div
        className="bg-white rounded-lg cursor-pointer font-semibold flex flex-row items-center justify-between  h-10 px-2"
        onClick={() => {
          dispatch(setOpenCheckBoxSelected(!OpenCheckBoxSelected));
          dispatch(closeOther("OpenCheckBoxSelected"));
        }}
      >
        <span className="text-base">{Label}</span>
        <span>
          <MdOutlineKeyboardArrowDown />
        </span>
      </div>
      <div
        className={`bg-white border-[1px] py-2 absolute mt-16 overflow-auto w-full h-60  flex flex-col gap-2 z-50 ${
          OpenCheckBoxSelected ? "visible" : "invisible"
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
                  <button
                    className="lg:w-1/2 w-full bg-[#EB1C74] h-full flex items-center justify-center rounded-md text-white font-semibold"
                    onClick={() => {
                      dispatch(setOpenCheckBoxSelected(!OpenCheckBoxSelected));
                    }}
                  >
                    Seçimleri Tamamla
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
