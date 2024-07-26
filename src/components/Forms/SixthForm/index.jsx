import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { POLICY } from "../../../constants/FourthStep";
import ThirdSection from "../../Sections/ThirdSection";

export default function SixthForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { PRIM } = useSelector((state) => state.thirdStep);


  const Lines = ({ item }) => {
    return (
      <div className="py-4 container">
        <div className="xl:text-2xl font-semibold">{item.title}</div>
        <div className="flex flex-col py-2">
          {item.options.map((element) => (
            <div key={element.id} className="flex flex-row items-center gap-2">
              <div className="font-semibold">{element.label + ": "} </div>
              <div>{element.value}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className=" bg-[#EFF0FF] container min-h-screen">
      <p className=" text-3xl text-[#EB1C74] font-semibold">Poliçe</p>
      <div className="w-full h-[1px] bg-slate-400 my-2" />
      <div className="w-full py-10 px-5  bg-white border-[1px] border-slate-400 my-10">
        <div className="flex flex-row items-center justify-between container">
          <img
            src="https://www.quicksigorta.com/Content/images/logo_quicksigorta_1x.webp"
            alt="Quicksigorta Logo"
            className="h-10 object-contain"
          />

          <img
            src="https://e-yaz.com.tr/wp-content/uploads/2019/07/barkod-nedir.png"
            alt="Barkod Logo"
            className="h-24 object-contain"
          />
        </div>
        <div
          className="w-full flex xl:flex-col flex-row items-end py-10 container"
        >
          <p className="font-semibold">Poliçe Numarası :</p>
          <p> 012345678</p>
        </div>
        <div className="flex items-center justify-center pb-5 xl:text-2xl font-bold">
          Tamamlayıcı Sağlık Sigortası
        </div>
        {POLICY.map((item) => (
          <Lines key={item.id} item={item} />
        ))}
      </div>
      <div className="max-xl:block hidden">
        <ThirdSection item={PRIM} />
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="my-10 rounded-xl flex justify-center items-center bg-[#44BD32] py-2 text-white text-base w-full"
      >
        Devam Et
      </button>
    </div>
  );
}
