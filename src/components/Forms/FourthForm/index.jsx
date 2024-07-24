import React from "react";
import { useFormik } from "formik";
import validationSchema from "./validations";
import { useNavigate} from "react-router-dom";

export default function FourthForm() {
  const navigate = useNavigate();

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      tcNo: "",
      birthDate: "",
      name: "",
      email: "",
      tcNo: "",
      telNo: "",
      checkbox: [],
    },
    onSubmit: (values) => {
      navigate("/info/5");
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
              className="w-full border-[1px] border-slate-400 rounded-md p-2"
            />
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
              type="email"
              onChange={handleChange}
              className="w-full border-[1px] border-slate-400 rounded-md p-2"
            />
          </div>
          <div className="md:col-span-2 col-span-4">
            <label>Cep Telefonu Numarası</label>
            <input
              name="telNo"
              value={values.telNo}
              onChange={handleChange}
              className="w-full border-[1px] border-slate-400 rounded-md p-2"
            />
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-10 bg-[#FEF6DD] my-4">
          <p className="font-bold">
            Bu poliçeyi SGK&#39;sı olan sigortalılar kullanabilir.
          </p>
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
