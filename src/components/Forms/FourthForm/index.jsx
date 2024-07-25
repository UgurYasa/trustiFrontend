import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

export default function FourthForm() {
  const navigate = useNavigate();

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      checkbox: [],
    },
    onSubmit: (values) => {
      navigate("/info/5");
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <div className=" bg-[#EFF0FF] container min-h-screen">
        <p className=" text-3xl text-[#EB1C74] font-semibold">
          Sigortalı Bilgileri
        </p>
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
