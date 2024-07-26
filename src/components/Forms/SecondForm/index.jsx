import React from "react";
import { useNavigate } from "react-router-dom";
import FamilyMember from "../../FamilyMember";
import { FAMILYMEMBER } from "../../../constants/SecondStep";
import { FaPlus } from "react-icons/fa6";
import SecondSection from "../../Sections/SecondSection";

export default function SecondForm() {
  const navigate = useNavigate();

  return (
    <div className=" bg-[#EFF0FF] container min-h-screen w-full py-4">
      <p className=" text-3xl text-[#EB1C74] font-semibold">Aile Üyeleri</p>
      <div className="w-full h-[1px] bg-slate-400 my-2" />
      {FAMILYMEMBER.map((member, index) => (
        <div className={`${member.id === 0 && "xl:block hidden"}`}>
          <FamilyMember key={index} member={member} />
        </div>
      ))}
      <div className="max-xl:block xl:hidden">
        <SecondSection />
      </div>
      <div className="flex xl:flex-row flex-col items-center xl:justify-between">
        <button
          onClick={() => {
            navigate("/yeni_kisi_ekle");
          }}
          className="my-10 rounded-xl flex justify-center items-center bg-[#44BD32] py-2 text-white text-base  lg:w-1/3 w-full lg:px-5 gap-2"
        >
          <FaPlus />
          <div>Yeni Kişi Ekle</div>
        </button>
        <button
          onClick={() => {
            navigate("/info/3");
          }}
          className="xl:my-10 rounded-xl flex justify-center items-center bg-[#44BD32] py-2 text-white text-base lg:w-1/3 w-full"
        >
          Devam Et
        </button>
      </div>
    </div>
  );
}
