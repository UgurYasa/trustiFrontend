import React, { useState } from "react";
import { useFormik } from "formik";
import validationSchema, {
  EmailValidation,
  PhoneNumberValidation,
  TCKValidation,
} from "./validations";
import { useNavigate } from "react-router-dom";
import { VALIDATIONERRORS } from "../../../constants/SecondStep";

export default function FirstForm({ click, setClick }) {
  const navigate = useNavigate();
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      tcNo: "",
      birthDate: "",
      name: "",
      email: "",
      telNo: "",
      checkbox: [],
    },

    onSubmit: (values) => {
      TCKValidation(values.tcNo) &&
      values.birthDate != "" &&
      values.name != "" &&
      values.email != "" &&
      values.telNo != "" &&
      values.checkbox.length === 3
        ? navigate("/info/2")
        : setClick(false);
    },
    validationSchema,
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className=" bg-[#EFF0FF] container min-h-screen">
        <p className=" text-3xl text-[#EB1C74] font-semibold">
          Sigortalı Bilgileri
        </p>
        <div className="w-full h-[1px] bg-slate-400 my-2" />
        {/*Information FORM */}
        <div className="grid grid-cols-4 gap-3">
          <div className="md:col-span-2 col-span-4">
            <label>T.C. veya Yabancı Kimlik No</label>
            <input
              name="tcNo"
              value={values.tcNo}
              onChange={handleChange}
              className={`w-full border-[1px] border-slate-400 rounded-md p-2 ${
                values.tcNo.length < 11
                  ? "focus:border-red-600 focus:outline-none focus:ring-0"
                  : TCKValidation(values.tcNo)
                  ? "focus:border-green-600 focus:outline-none focus:ring-0 border-green-600"
                  : "focus:border-red-600 focus:outline-none focus:ring-0"
              }`}
            />
            <p
              className={`my-1 p-2 text-white text-sm rounded-md ${
                !click ? "block bg-[#F66565]" : "hidden"
              }`}
            >
              {VALIDATIONERRORS[0]}
            </p>
          </div>
          <div className="md:col-span-2 col-span-4">
            <label>Doğum Tarihi</label>
            <input
              name="birthDate"
              value={values.birthDate}
              type="date"
              onChange={handleChange}
              className="w-full border-[1px] border-slate-400 rounded-md p-2"
            />
            <p
              className={`my-1 p-2 text-white text-xs rounded-md xl:w-1/2 w-full ${
                !click ? "block bg-[#F66565]" : "hidden"
              }`}
            >
              {VALIDATIONERRORS[1]}
            </p>
          </div>
          <div className="col-span-4">
            <label>Ad Soyad</label>
            <input
              name="name"
              value={values.name}
              type="text"
              onChange={handleChange}
              className="w-full border-[1px] border-slate-400 rounded-md p-2"
            />
          </div>
        </div>
        <p className=" text-3xl text-[#EB1C74] font-semibold mt-5">
          İletişim Bilgileri
        </p>
        <div className="w-full h-[1px] bg-slate-400 my-2" />

        {/*Connection FORM */}
        <div className="grid grid-cols-4 md:gap-3 gap-5 my-4">
          <div className="md:col-span-2 col-span-4">
            <label>E-Posta Adresi</label>
            <input
              name="email"
              value={values.email}
              onChange={handleChange}
              className={`w-full border-[1px] border-slate-400 rounded-md p-2 ${
                EmailValidation(values.email)
                  ? "focus:border-green-600 focus:outline-none focus:ring-0 border-green-600"
                  : "focus:border-red-600 focus:outline-none focus:ring-0"
              }`}
            />
            <p
              className={`my-1 p-2 text-white text-xs rounded-md md:w-1/2 w-full ${
                !click ? "block bg-[#F66565]" : "hidden"
              }`}
            >
              {VALIDATIONERRORS[2]}
            </p>
          </div>

          <div className="md:col-span-2 col-span-4">
            <label>Cep Telefonu Numarası</label>
            <input
              name="telNo"
              value={values.telNo}
              onChange={handleChange}
              className={`w-full border-[1px] border-slate-400 rounded-md p-2 ${
                PhoneNumberValidation(values.telNo)
                  ? "focus:border-green-600 focus:outline-none focus:ring-0 border-green-600"
                  : "focus:border-red-600 focus:outline-none focus:ring-0"
              }`}
            />
            <p
              className={`my-1 p-2 text-white text-xs rounded-md md:w-2/3 w-full ${
                !click ? "block bg-[#F66565]" : "hidden"
              }`}
            >
              {VALIDATIONERRORS[3]}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-10 bg-[#FEF6DD] my-4">
          <p className="font-bold">
            Bu poliçeyi SGK&#39;sı olan sigortalılar kullanabilir.
          </p>
        </div>
        {/* CHECKBOX */}
        <div className="flex flex-row items-center w-full h-10 mt-2 gap-2 md:text-sm text-xs">
          <input
            type="checkbox"
            className="bg-slate-500"
            name="checkbox"
            value="Gizlilik Sözleşmesi"
            onChange={handleChange}
          />
          <div>
            <span className="text-[#EB1C74] hover:text-blue-950 cursor-pointer">
              Gizlilik Politikası
            </span>{" "}
            ,{" "}
            <span className="text-[#EB1C74] hover:text-blue-950 cursor-pointer">
              Kullanıcı Sözleşmesi
            </span>{" "}
            ve{" "}
            <span className="text-[#EB1C74] hover:text-blue-950 cursor-pointer">
              Poliçe Bilgilendirme Formu&#39;nu
            </span>{" "}
            okudum ve kabul ediyorum.
          </div>
        </div>
        <p
          className={` mb-2 p-2 text-white text-xs rounded-md w-full ${
            !click ? "block bg-[#F66565]" : "hidden"
          }`}
        >
          {VALIDATIONERRORS[4]}
        </p>
        <div className="flex flex-row mt-2 items-center w-full gap-2">
          <input
            type="checkbox"
            className="bg-slate-500"
            name="checkbox"
            value="KVKK Sözleşmesi"
            onChange={handleChange}
          />

          <p className=" flex flex-row gap-1">
            <span className="text-[#EB1C74] hover:text-blue-950 cursor-pointer">
              KVKK Aydınlatma Metni&#39;ni
            </span>{" "}
            okudum ve kabul ediyorum.
          </p>
        </div>
        <p
          className={` mb-2 p-2 text-white text-xs rounded-md md:w-1/2 w-full ${
            !click ? "block bg-[#F66565]" : "hidden"
          }`}
        >
          {VALIDATIONERRORS[4]}
        </p>
        <div className="flex flex-row items-center w-full h-10 my-2 gap-2">
          <input
            type="checkbox"
            className="bg-slate-500"
            name="checkbox"
            value="Açık Rıza Sözleşmesi"
            onChange={handleChange}
          />

          <div>
            <span className="text-[#EB1C74] hover:text-blue-950 cursor-pointer">
              Açık Rıza Metni
            </span>{" "}
            kapsamında kişisel verilerimin işlenmesine rıza gösteriyorum.
          </div>
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

// className={`w-full border-[1px] rounded-md p-2 ${
//   values.tcNo.length === 11
//     ? TCKValidation(values.tcNo)
//       ? "border-green-500"
//       : "border-red-500"
//     : ""
// }`}
