import React, { useState } from "react";
import { DECLARATION } from "../../constants/FourthStep";
import { censorWords } from "../../constants/Functions";
import { FAMILYMEMBER } from "../../constants/SecondStep";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { LiaStethoscopeSolid } from "react-icons/lia";
import RadioButton from "../RadioButton";

export const QuestionCard = ({ item, control = 0, setList,option }) => {
  return (
    <div className="grid grid-cols-6 max-xl:my-4">
      <div
        className={` ${
          control
            ? "col-span-6 text-lg"
            : "xl:col-span-4 col-span-6 border-[1px] border-slate-300"
        }  flex items-center px-3 py-2 text-sm`}
      >
        {item.question}
      </div>
      <div
        className={`${
          control
            ? "col-span-3 text-base"
            : "xl:col-span-1 col-span-3 border-[1px] border-slate-300"
        } p-2 flex flex-row items-center xl:gap-2 300 max-xl:gap-2`}
      >
        <div className={`${control === 0 && item.id === 0 && "hidden"}`}>
          <RadioButton
            value="Evet"
            selectedValue={item.answer}
            item={item}
            setList={setList}
            control={option}
          />
        </div>

        <p>
          {control === 1
            ? "Evet"
            : control === 2
            ? "SMS ile"
            : item.id === 0
            ? ""
            : "Var"}
        </p>
      </div>
      <div
        className={`${
          control
            ? "col-span-3 text-base"
            : "xl:col-span-1 col-span-3 border-[1px] border-slate-300"
        } p-2 flex flex-row items-center xl:gap-2 300 max-xl:gap-2`}
      >
        <RadioButton
          value="Hayır"
          selectedValue={item.answer}
          item={item}
          setList={setList}
          control={option}
        />

        <p>
          {control === 1
            ? "Hayır"
            : control === 2
            ? "E-posta ile"
            : item.id === 0
            ? "Tümünü Seç"
            : "Yok"}
        </p>
      </div>
    </div>
  );
};
export default function DeclarationForm({ list, setList }) {
  const [click, setClick] = useState(true);
  return (
    <div>
      <div className="w-full bg-white shadow-lg shadow-slate-500 rounded-2xl flex flex-col px-4 py-5 my-10">
        <div className="flex flex-row items-center justify-between my-4">
          <div className="flex flex-row items-center gap-4">
            <LiaStethoscopeSolid className="bg-red-300 text-white text-4xl p-2 rounded-full" />
            <p className="text-xl">
              {censorWords(FAMILYMEMBER[1].name) +
                " (" +
                FAMILYMEMBER[1].proximity +
                ")"}
            </p>
          </div>
          <FaChevronDown
            className={`text-[#EB1C74] text-xl cursor-pointer ${
              click && "hidden"
            }`}
            onClick={() => {
              setClick(true);
            }}
          />
          <FaChevronUp
            className={`text-[#EB1C74] text-xl cursor-pointer ${
              !click && "hidden"
            }`}
            onClick={() => {
              setClick(false);
            }}
          />
        </div>
        {click && (
          <div>
            {list.slice(0, -2).map((item) => (
              <QuestionCard key={item.id} item={item} setList={setList} option={true}/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
