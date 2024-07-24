import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import TimeLine from "../components/TimeLine";
import { BsHeartPulse } from "react-icons/bs";
import { HOWTOBUY } from "../constants/SecondStep";
import { useFormik } from "formik";
export default function InfoScreen() {
  let { id } = useParams();
  let router = useNavigate();
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      tcNo: "",
      birthDate: "",
      name: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col xl:min-h-screen h-auto bg-[#F7F9FA]">
        {/* Header */}
        <div className="bg-white w-full h-14 flex items-center sticky z-50 top-0">
          <div className="container flex max-md:justify-center max-md:items-center">
            <img
              src="https://www.quicksigorta.com/Content/images/logo_quicksigorta_1x.webp"
              alt="Quicksigorta Logo"
              className="h-8 cursor-pointer"
            />
          </div>
        </div>
        {/* TimeLine */}
        <div className="bg-[#E8EAFF] flex justify-center">
          <div className="container">
            <div className="container">
              <div className="flex flex-row justify-center">
                <div className="flex flex-col max-h-screen">
                  <div className="h-40 max-xl:mt-10">
                    <TimeLine />
                  </div>
                  <div className=" bg-[#EFF0FF] container">
                    <p className=" text-3xl text-[#EB1C74] font-semibold border-b-[1px] border-slate-400">
                      Sigortalı Bilgileri
                    </p>
                   
                  </div>
                </div>
                <div className=" w-1/3 flex flex-col  mx-14 sticky container py-5 max-md:hidden">
                  <div className="flex flex-row items-center justify-around h-40 bg-[#EB1C74]">
                    <BsHeartPulse className="text-white text-5xl" />
                    <div>
                      <p className="font-black text-2xl text-white">Quick</p>
                      <p className="font-black text-2xl text-white">
                        Tamamlayıcı
                      </p>
                      <p className="font-bold text-xl text-white">
                        <span className="font-black">Sağlık</span> Sigortası
                      </p>
                    </div>
                  </div>
                  <div className="bg-white container">
                    <p className="text-[#EB1C74] font-bold text-lg">
                      Quick Tamamlayıcı Sağlık Sigortası <br /> nasıl alınır?
                    </p>

                    {HOWTOBUY.map((item) => (
                      <div className="flex flex-row items-center gap-2">
                        &#8226; <p className="text-black text-base">{item}</p>
                      </div>
                    ))}

                    <button
                      type="submit"
                      className="my-10 rounded-xl flex justify-center items-center bg-[#44BD32] py-2 text-white text-base w-full"
                    >
                      Devam Et
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
