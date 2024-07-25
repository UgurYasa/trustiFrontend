import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { closeOther, setOpenSelected } from "../../../redux/firstStepSlice";

export default function Select({ data, isShowTitle, selected, setSelected }) {
  const { OpenSelected } = useSelector((state) => state.firstStep);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col relative">
      <p className={`${isShowTitle ? "block" : "hidden"}`}>Gender</p>
      <div
        className="bg-white rounded-lg cursor-pointer font-semibold flex flex-row items-center justify-between  h-10 px-2"
        onClick={() => {
          dispatch(setOpenSelected(!OpenSelected));
          dispatch(closeOther("OpenSelected"));
        }}
      >
        <span className="text-base">{selected}</span>
        <span>
          <MdOutlineKeyboardArrowDown />
        </span>
      </div>
      <div
        className={`border-2 bg-white py-2 absolute  w-full h-20  flex flex-col gap-2 z-50 ${
          OpenSelected && isShowTitle ? "visible" : "invisible"
        } ${isShowTitle ? "mt-16" : "mt-10 z-50 h-40 overflow-auto w-10"}`}
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="hover:bg-slate-400 bg-white cursor-pointer font-semibold  justify-center items-center  w-full  h-10 px-2"
            onClick={() => {
              setSelected(item.label);
              dispatch(setOpenSelected(false));
            }}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
