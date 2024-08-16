import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import turkishToUpper from "../../../constants/Functions";
import {
  closeOther,
  setisSearchSelected,
  setOpenSearchSelected,
} from "../../../redux/firstStepSlice";
import { useGetCities } from "../../../services/hooks/cities";
import { useQueryClient } from "@tanstack/react-query";
import { LOCATIONS } from "../../../constants/FirstStep";

export default function SearchDropdown() {
  const { data: CITIES,isLoading,isError } = useGetCities(
    () => console.log("success"),
    (error) => console.log(error.message)
  );
  const queryClient = useQueryClient();
  const [filterList, setFilterList] = useState(CITIES?CITIES:LOCATIONS);
  const [word, setword] = useState("");
  const [cityName, setCityName] = useState("Seçiniz");

  const { OpenSearchSelected, isSearchSelected } = useSelector(
    (state) => state.firstStep
  );
  const dispatch = useDispatch();

  const handleChanges = (e) => {
    setword(e.target.value);
  };
  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["Locations"] });
    setFilterList(CITIES?CITIES:LOCATIONS);
  }, [CITIES]);
  useEffect(() => {
    setFilterList(
      CITIES?CITIES:LOCATIONS.filter((item) =>
        item.city_Name.turkishToUpper().includes(word.turkishToUpper())
      )
    );
  }, [word]);
  return (
    <div className="flex flex-col relative w-full">
      <p>Şehir</p>

      <div
        className="bg-white rounded-md cursor-pointer font-semibold flex flex-row items-center justify-between  h-10 px-2 border-[2px] border-[#CECECE] hover:border-pink-500"
        onClick={() => {
          dispatch(setOpenSearchSelected(!OpenSearchSelected));
          dispatch(closeOther("OpenSearchSelected"));
        }}
      >
        <span className="text-base opacity-70">
          {cityName.length <= 8 ? cityName :cityName.slice(0, 5) + "..."}
        </span>
        <span>
         <MdOutlineKeyboardArrowDown className="text-xl text-[#CECECE]"/>
        </span>
      </div>
      <div
        className={` bg-white border-[1px] py-2 absolute mt-16 overflow-auto w-full h-40  flex flex-col gap-2 z-50 scrollbar-hide ${
          OpenSearchSelected ? "visible" : "invisible"
        }`}
      >
        <input className="px-2 py-1 border-2" onChange={handleChanges} />
        {filterList &&
          filterList.map((item) => (
            <div
              key={item.city_Id}
              className="hover:bg-slate-400 bg-white cursor-pointer font-semibold border-[1px] "
              onClick={() => {
                dispatch(
                  setisSearchSelected(CITIES ? item.city_Id : item.city_Name)
                );
                dispatch(setOpenSearchSelected(false));
                setCityName(item.city_Name);
              }}
            >
              {item.city_Name}
            </div>
          ))}
      </div>
    </div>
  );
}
