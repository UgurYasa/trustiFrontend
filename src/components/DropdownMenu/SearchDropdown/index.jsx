import React, { useEffect, useState } from "react";
import { LOCATIONS } from "../../../constants/FirstStep";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function SearchDropdown() {
  const [filterList, setFilterList] = useState(LOCATIONS);
  const [word, setword] = useState("");
  const [selected, setSelected] = useState("Seçiniz");
  const [isHeaderMenuOpen, setIsHeaderMenuOpen] = useState(false);
  const handleChanges = (e) => {
    setword(e.target.value);
  };
  String.prototype.turkishToUpper = function(){
    var string = this;
    var letters = { "i": "İ", "ş": "Ş", "ğ": "Ğ", "ü": "Ü", "ö": "Ö", "ç": "Ç", "ı": "I" };
    string = string.replace(/(([iışğüçö]))+/g, function(letter){ return letters[letter]; })
    return string.toUpperCase();
}
  useEffect(() => {
    setFilterList(
      LOCATIONS.filter((item) =>
        item.label.turkishToUpper().includes(word.turkishToUpper())
      )
    );
  }, [word]);
  return (
    <div className="flex flex-col relative w-full">
      <p>Şehir</p>

      <div
        className="bg-white rounded-lg cursor-pointer font-semibold flex flex-row items-center justify-between  h-10 px-2"
        onClick={() => {
          setIsHeaderMenuOpen(!isHeaderMenuOpen);
        }}
      >
        <span className="text-base">{selected}</span>
        <span>
          <MdOutlineKeyboardArrowDown />
        </span>
      </div>
      <div
        className={` bg-white border-[1px] py-2 absolute mt-16 overflow-auto w-full h-40  flex flex-col gap-2 ${
          isHeaderMenuOpen ? "visible" : "invisible"
        }`}
      >
        <input className="px-2 py-1 border-2" onChange={handleChanges} />
        {filterList.map((item) => (
          <div
            key={item.id}
            className="hover:bg-slate-400 bg-white cursor-pointer font-semibold border-[1px] "
            onClick={() => {
              setSelected(item.label);
              setIsHeaderMenuOpen(false);
            }}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
