import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearAll } from "../../../redux/firstStepSlice";

export default function SixthForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      checkbox: [],
    },
    onSubmit: (values) => {
      dispatch(clearAll());
      navigate("/");
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
