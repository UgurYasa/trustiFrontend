import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import TimeLine from "../components/TimeLine";
import { BsHeartPulse } from "react-icons/bs";
import { HOWTOBUY } from "../constants/SecondStep";
import { useFormik } from "formik";
import FirstForm from "../components/Forms/FirstForm";
import SecondForm from "../components/Forms/SecondForm";
import ThirdForm from "../components/Forms/ThirdForm";
import FourthForm from "../components/Forms/FourthForm";
import FifthForm from "../components/Forms/FifthForm";
export default function InfoScreen() {
  const { id } = useParams();
  const navigate = useNavigate();
  const FormInfo = () => {
    switch (id) {
      case "1":
        return <FirstForm />;
      case "2":
        return <SecondForm />;
      case "3":
        return <ThirdForm />;
      case "4":
        return <FourthForm />;
      case "5":
        return <FifthForm />;
      default:
        return <div>oldu</div>;
    }
  };
  return (
    <div className="flex flex-col xl:min-h-screen h-auto bg-[#F7F9FA]">
      {/* Header */}
      <div className="bg-white w-full h-14 flex items-center sticky z-50 top-0">
        <div className="container flex max-md:justify-center max-md:items-center">
          <img
            src="https://www.quicksigorta.com/Content/images/logo_quicksigorta_1x.webp"
            alt="Quicksigorta Logo"
            className="h-8 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
      </div>
      {/* TimeLine */}
      <div className="bg-[#E8EAFF] flex justify-center overflow-hidden min-h-screen">
        <div className="container">
          <div className="container">
            <div className="flex flex-row justify-center">
              <div className="flex flex-col">
                <div className="h-40 max-xl:mt-10 xl:mx-20 flex items-center lg:justify-end justify-center">
                  <TimeLine activated={id} />
                </div>
                <FormInfo />
              </div>
              <div className=" w-2/3 flex flex-col  mx-14 sticky py-5 max-lg:hidden">
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
                <div className="bg-white container pb-10">
                  <p className="text-[#EB1C74] font-bold text-lg">
                    Quick Tamamlayıcı Sağlık Sigortası <br /> nasıl alınır?
                  </p>

                  {HOWTOBUY.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-row items-center gap-2 max-xl:hidden"
                    >
                      &#8226; <p className="text-black text-base">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
