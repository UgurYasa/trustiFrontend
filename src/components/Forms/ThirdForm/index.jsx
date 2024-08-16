import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { Switch } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import NetworkDetailCard from "../../NetworkDetailCard";
import CollateralDetails from "../../CollateralDetails";
import ThirdSection from "../../Sections/ThirdSection";
import { NETWORKS } from "../../../constants/ThirdStep";
import { useDispatch, useSelector } from "react-redux";
import { useGetCoverageById } from "../../../services/hooks/coverages";
import { setNetworksDetailsData } from "../../../redux/thirdStepSlice";

export default function ThirdForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { customer_No, filterVar } = useParams();
  const { PRIM, clicked, NETWORKSDETAILSDATA } = useSelector(
    (state) => state.thirdStep
  );
  const [list, setList] = useState(NETWORKSDETAILSDATA[0]);

  const { data: coverages } = useGetCoverageById(
    () => {
      dispatch(setNetworksDetailsData(coverages));
    },
    () => {
      alert("Hata oluştu");
    },
    filterVar ? filterVar : 1
  );

  useEffect(() => {
    if (coverages) {
      dispatch(setNetworksDetailsData(coverages));
    } else {
      console.log("coverages yok");
    }
  }, [coverages]);

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      switch: false,
    },
    onSubmit: (values) => {
      values.switch && clicked && navigate("/info/4/" + customer_No);
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
          <Switch
            checked={values.switch}
            onChange={handleChange}
            name="switch"
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
          {NETWORKSDETAILSDATA[0].map((network, index) => (
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
