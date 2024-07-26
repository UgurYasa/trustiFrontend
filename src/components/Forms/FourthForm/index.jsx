import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import DeclarationForm, { QuestionCard } from "../../DeclarationForm";
import { FaInfoCircle } from "react-icons/fa";
import { DECLARATION, OTHERCOMPANY } from "../../../constants/FourthStep";
import ThirdSection from "../../Sections/ThirdSection";
import { useSelector } from "react-redux";


export default function FourthForm() {
  const navigate = useNavigate();
  const { PRIM } = useSelector((state) => state.thirdStep);
  const [list, setList] = React.useState(OTHERCOMPANY);
  const [list2, setList2] = React.useState(DECLARATION);
  const allChecked = (list) => {
    return list.every((item) => item.answer !== "");
  };

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      checkbox: [],
    },
    onSubmit: (values) => {
      allChecked(list) && allChecked(list2) && navigate("/info/5");
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <div className=" bg-[#EFF0FF] container min-h-screen">
        {/* SağlıkBeyan Soruları */}
        <p className=" text-3xl text-[#EB1C74] font-semibold">
          Sağlık Beyan Soruları
        </p>
        <div className="w-full h-[1px] bg-slate-400 my-2" />
        {/* Metin */}
        <p className="my-5">
          Her bir sigortalı için sağlık beyanı sorularını doldurunuz
        </p>
        <p className="my-5">
          &#168;Var&#168; olarak işaretleyeceğiniz sorular için açılacak
          açıklama alanlarına rahatsızlığınızın tıbbi tanısı,tedavi geçmiş gibi
          detayları yazarak epikriz raporlaro, test&#8260;patoloji sonuçları vb.
          tıbbi belgeleri ekleyiniz.
        </p>
        {/* FORM */}
        <DeclarationForm list={list2} setList={setList2} />
        {/* Dİğer Sigorta Şirketi */}
        <div className="flex flex-row items-center justify-between">
          <p className=" text-3xl text-[#EB1C74] font-semibold">
            Diğer Sigorta Şirketi
          </p>
          <div className="flex flex-row items-center justify-center py-1 px-2 bg-white rounded-lg text-[#EB1C74] gap-1 cursor-pointer">
            <FaInfoCircle className=" text-lg" />
            <p>Bilgi</p>
          </div>
        </div>
        <div className="w-full h-[1px] bg-slate-400 my-2" />
        <QuestionCard
          item={list[0]}
          control={1}
          setList={setList}
          option={false}
        />
        <p className=" text-3xl text-[#EB1C74] font-semibold mt-3">
          Beyan Onay Yöntemi
        </p>
        <div className="w-full h-[1px] bg-slate-400 my-2" />
        <QuestionCard
          item={list[1]}
          control={2}
          setList={setList}
          option={false}
        />
        <div className="max-xl:block hidden">
          <ThirdSection item={PRIM} />
        </div>
        <button
          type="submit"
          className="my-10 rounded-xl flex justify-center items-center bg-[#44BD32] py-2 text-white text-base w-full"
        >
          Devam Et
        </button>
      </div>
    </form>
  );
}
