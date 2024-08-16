import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { POLICY } from "../../../constants/FourthStep";
import ThirdSection from "../../Sections/ThirdSection";
import PolicyPDF from "../../PolicyPDF";
import Swal from "sweetalert2";

export default function SixthForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { PRIM } = useSelector((state) => state.thirdStep);

  return (
    <div className=" bg-[#EFF0FF] xl:container max-xl:px-4 min-h-screen">
      <p className=" text-3xl text-[#EB1C74] font-semibold">Poliçe</p>
      <div className="w-full h-[1px] bg-slate-400 my-2" />
      <PolicyPDF />
      <div className="max-xl:block hidden">
        <ThirdSection item={PRIM} />
      </div>
      <button
        onClick={() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Başvurunuz başarıyla alınmıştır.",
            showConfirmButton: false,
            timer: 1500
          });
          navigate("/");
        }}
        className="my-10 rounded-xl flex justify-center items-center bg-[#44BD32] py-2 text-white text-base w-full"
      >
        Devam Et
      </button>
    </div>
  );
}
