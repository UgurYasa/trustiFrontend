import React, { useEffect, useState } from "react";
import Select from "../DropdownMenu/Select";
import SearchDropdown from "../DropdownMenu/SearchDropdown";
import CheckBoxDropdown from "../DropdownMenu/CheckBoxDropdown";
import { GENDER } from "../../constants/FirstStep";
import { useDispatch, useSelector } from "react-redux";
import { setIsSelected, setFiyatAl } from "../../redux/firstStepSlice";
import { Link, useNavigate } from "react-router-dom";

export default function Slider() {
  const navigate = useNavigate();
  const { isSelected } = useSelector((state) => state.firstStep);
  const dispatch = useDispatch();
  const ButtonsName = [
    "Avantajlar",
    "Ek Hizmetler",
    "Teminatlar",
    "Merak Ettikleriniz",
  ];
  return (
    <div className="bg-[#EAF1F6]">
      <div className="flex items-center justify-center bg-[#EAF1F6] py-5 xl:px-40">
        <div className="flex xl:flex-row flex-col-reverse items-center w-4/5  max-xl:py-5">
          <div className="flex flex-col gap-4 xl:py-20 xl:px-10 px-5 xl:w-2/3 w-full">
            <div className="flex flex-col mb-10">
              <h1 className="xl:text-5xl text-2xl font-bold text-[#1F2346]">
                Quick
              </h1>
              <p className="font-normal xl:text-5xl md:text-3xl text-lg text-[#1F2346]">
                Tamamlayıcı Sağlık Sigortası
              </p>
            </div>
            <div className="flex flex-col ">
              <p className="font-medium md:text-2xl text-base">
                Şehrin en iyi hastanesi bana yeter.
              </p>
              <p className="font-medium md:text-2xl text-base">
                Farkı Quick öder.
              </p>
            </div>
            <div className="grid grid-cols-5 gap-2 w-full">
              {ButtonsName.map((item, index) => (
                <Link
                  key={index}
                  className={`hover:bg-[#1F2346] hover:text-white rounded-lg p-2 border-[1px] border-black flex items-center justify-center cursor-pointer h-14 ${
                    index === 3
                      ? "xl:col-span-2 col-span-5"
                      : "xl:col-span-1 col-span-5"
                  }`}
                  target="_blank"
                  to={"/" + item}
                >
                  <p>{item}</p>
                </Link>
              ))}
            </div>
            <div className="grid grid-cols-6 gap-4 bg-[#E4EEF5] rounded-lg py-4 px-2">
              <div className="xl:col-span-1 col-span-6">
                <Select
                  data={GENDER}
                  isShowTitle={true}
                  selected={isSelected}
                  setSelected={(value) => dispatch(setIsSelected(value))}
                />
              </div>
              <div className="xl:col-span-3 col-span-6">
                <CheckBoxDropdown />
              </div>
              <div className="xl:col-span-1 col-span-6">
                <SearchDropdown />
              </div>
              <div
                className="bg-[#EB1C74] text-white flex items-center justify-center rounded-lg xl:col-span-1 col-span-6 md:h-10 md:mt-5 self-center cursor-pointer"
                onClick={() => {
                  dispatch(setFiyatAl());
                }}
              >
                Fiyatı Gör
              </div>
            </div>
          </div>
          <div className="flex xl:flex-row flex-col">
            <img
              src="https://www.quicksigorta.com/Content/images/svg/tss-slogan.svg"
              alt="Quick Sağlık Sigortası"
              className="xl:w-1/3 max-h-[400px] xl:-mt-20"
            />
            <img
              src="https://www.quicksigorta.com/Content/images/svg/tss-characters-obyg.webp"
              alt="Quick Sağlık Sigortası"
              className="xl:w-2/3 max-h-[450px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
