import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TimeLine from "../components/TimeLine";
import { BsHeartPulse } from "react-icons/bs";
import FirstForm from "../components/Forms/FirstForm";
import SecondForm from "../components/Forms/SecondForm";
import ThirdForm from "../components/Forms/ThirdForm";
import FourthForm from "../components/Forms/FourthForm";
import FifthForm from "../components/Forms/FifthForm";
import FirstSection from "../components/Sections/FistSection";
import SecondSection from "../components/Sections/SecondSection";
import ThirdSection from "../components/Sections/ThirdSection";
import NotFound from "./NotFound";
import SixthForm from "../components/Forms/SixthForm";
import { PRIM } from "../constants/SecondStep";
export default function InfoScreen() {
  const [validationClick, setValidationClick] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const FormInfo = () => {
    switch (id) {
      case "1":
        return (
          <FirstForm click={validationClick} setClick={setValidationClick} />
        );
      case "2":
        return <SecondForm />;
      case "3":
        return <ThirdForm />;
      case "4":
        return <FourthForm />;
      case "5":
        return <FifthForm />;
      case "6":
        return <SixthForm />;
      default:
        return <NotFound />;
    }
  };
  const SectionInfo = () => {
    switch (id) {
      case "1":
        return <FirstSection />;
      case "2":
        return <SecondSection />;

      default:
        return <ThirdSection item={PRIM} />;
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
        <div className="xl:container">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col ">
              <div className="h-40 max-xl:mt-10 xl:mx-20 flex items-center xl:justify-end justify-center">
                <TimeLine activated={id} />
              </div>
              <FormInfo />
            </div>
            <div className="xl:w-2/3 max-lg:hidden flex flex-col xl:mx-14 sticky py-5 ">
              <div className="flex lg:flex-row flex-col items-center xl:justify-around  max-xl:justify-center h-40 bg-[#EB1C74] max-xl:p-2 max-xl:gap-10">
                <BsHeartPulse className="text-white text-5xl" />
                <div>
                  <p className="font-black text-2xl text-white">Quick</p>
                  <p className="font-black text-2xl text-white">Tamamlayıcı</p>
                  <p className="font-bold text-xl text-white">
                    <span className="font-black">Sağlık</span> Sigortası
                  </p>
                </div>
              </div>
              <div className="bg-white container xl:pb-10 rounded-b-xl xl:block hidden">
                <SectionInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
