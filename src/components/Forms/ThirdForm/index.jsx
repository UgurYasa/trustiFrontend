import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { FormControlLabel, Switch } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import NetworkDetailCard from "../../NetworkDetailCard";
import CollateralDetails from "../../CollateralDetails";
import ThirdSection from "../../Sections/ThirdSection";
import { NETWORKS } from "../../../constants/ThirdStep";
import { useDispatch, useSelector } from "react-redux";
import { setClicked } from "../../../redux/thirdStepSlice";

export default function ThirdForm() {
  const navigate = useNavigate();
  const [list, setList] = useState(NETWORKS);
  const { PRIM, clicked } = useSelector((state) => state.thirdStep);
  const dispatch = useDispatch();

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      switch: false,
    },
    onSubmit: (values) => {
      values.switch && clicked && navigate("/info/4");
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <div className=" bg-[#EFF0FF] container min-h-screen">
        <p className=" text-3xl text-[#EB1C74] font-semibold">
          Ömür Boyu yenileme garantisi
        </p>
        <div className="w-full h-[1px] bg-slate-400 my-2" />
        <p className="my-10 text-slate-400">
          Ömür Boyu Yenileme Garantisi (ÖBYG), sigortalının ilgili ürün için
          sahip olduğu plan, network ve Özel Şart tarifesinin yenilenme
          dönemindeki güncel halleriyle ömür boyu yenilenmesi taahhüdüdür.{" "}
        </p>
        <div className="w-full md:h-20 bg-[#E8EAFF] flex md:flex-row flex-col items-center justify-between px-10">
          <p className="text-black text-lg">
            Ek prim ile ÖBYG değerlendirme süresini değişirmek istiyorum
          </p>
          <FormControlLabel
            control={
              <Switch
                checked={values.switch}
                onChange={handleChange}
                name="switch"
              />
            }
          />
        </div>
        <div className="xl:hidden block my-10">
          <ThirdSection item={PRIM} />
        </div>
        <div className="flex flex-row items-end justify-between">
          <p className=" text-3xl text-[#EB1C74] font-semibold">
            Network Seçimi
          </p>
          <div className="flex flex-row items-center cursor-pointer ">
            <CiSearch className="text-black" />
            <p className="xl:block hidden">Network Detaylarını incele</p>
          </div>
        </div>
        <div className="w-full h-[1px] bg-slate-400 my-2" />
        <div className="grid grid-cols-3 gap-3">
          {NETWORKS.map((network, index) => (
            <div key={index} className="xl:col-span-1 col-span-3">
              <NetworkDetailCard
                network={network}
                setList={setList}
                list={list}
              />
            </div>
          ))}
        </div>

        <p className=" text-3xl text-[#EB1C74] font-semibold">
          Teminat Detayları
        </p>
        <div className="w-full h-[1px] bg-slate-400 my-2" />
        {clicked && (
          <CollateralDetails
            value={PRIM.title}
            color={PRIM.color}
            isInpatient={PRIM.isInpatient}
          />
        )}

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
