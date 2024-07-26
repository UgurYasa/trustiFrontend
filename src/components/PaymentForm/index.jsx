import React, { useEffect, useState } from "react";
import { clearAll } from "../../redux/firstStepSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import {
  isValidCardNumber,
  isValidCvv,
  isValidExpDate,
  isValidName,
  maskCardNumber,
  maskCvv,
  maskExpDate,
} from "./validations";
import { PRIM } from "../../constants/SecondStep";
import ThirdSection from "../Sections/ThirdSection";
import { BackCard } from "./CreditCard/BackFront";
import { FrontCard } from "./CreditCard/FrontCard";

export default function PaymentForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);
  const [card, setCard] = useState("XXXX-XXXX-XXXX-XXXX");
  const [date, setDate] = useState("AA/YY");
  const [cvv, setCvv] = useState("CVV");
  const [check, setCheck] = useState(true);

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      fName: "",
      lName: "",
      CVV: "",
      cardNo: "",
      expDate: "",
    },
    onSubmit: (values) => {
      isValidCardNumber(values.cardNo) &&
      isValidExpDate(values.expDate) &&
      isValidCvv(values.CVV) &&
      isValidName(values.fName, values.lName)
        ? navigate("/info/6")
        : setCheck(false);

      dispatch(clearAll());
    },
  });

  useEffect(() => {
    setCard(maskCardNumber(values.cardNo));
    setDate(maskExpDate(values.expDate));
    setCvv(maskCvv(values.CVV));
  }, [values]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center justify-center">
        {clicked ? (
          <BackCard cvv={cvv} setClicked={setClicked} />
        ) : (
          <FrontCard
            fname={values.fName}
            lname={values.lName}
            cardNo={card}
            expdate={date}
            setClicked={setClicked}
          />
        )}
      </div>

      <div className="grid grid-cols-4 gap-2 my-10">
        <div className="xl:col-span-2 col-span-4">
          <label>Ad</label>
          <input
            name="fName"
            placeholder="Ad"
            value={values.fName}
            type="text"
            onChange={handleChange}
            onFocus={() => {
              setClicked(false);
            }}
            className="w-full border-[1px] border-slate-400 rounded-md p-2"
          />
          <p
            className={`my-1 p-2 text-white text-sm rounded-md ${
              !check ? "block bg-[#F66565]" : "hidden"
            }`}
          >
            Lütfen Adınızı Giriniz
          </p>
        </div>
        <div className="xl:col-span-2 col-span-4">
          <label>Soyad</label>
          <input
            name="lName"
            placeholder="Soyad"
            value={values.lName}
            type="text"
            onChange={handleChange}
            onFocus={() => {
              setClicked(false);
            }}
            className="w-full border-[1px] border-slate-400 rounded-md p-2"
          />
          <p
            className={`my-1 p-2 text-white text-sm rounded-md ${
              !check ? "block bg-[#F66565]" : "hidden"
            }`}
          >
            Lütfen Soyadınızı Giriniz
          </p>
        </div>
        <div className="col-span-4 my-4">
          <label>Kart Numarası</label>
          <input
            name="cardNo"
            placeholder="XXXX-XXXX-XXXX-XXXX"
            value={values.cardNo}
            type="text"
            onChange={(e) => {
              e.target.value.length <= 16 && handleChange(e);
            }}
            onFocus={() => {
              setClicked(false);
            }}
            className={`w-full border-[1px] border-slate-400 rounded-md p-2 ${
              values.cardNo.length < 16
                ? "focus:border-red-600 focus:outline-none focus:ring-0"
                : isValidCardNumber(values.cardNo)
                ? "focus:border-green-600 focus:outline-none focus:ring-0 border-green-600"
                : "focus:border-red-600 focus:outline-none focus:ring-0"
            }`}
          />
          <p
            className={`my-1 p-2 text-white text-sm rounded-md ${
              !check ? "block bg-[#F66565]" : "hidden"
            }`}
          >
            Lütfen Kart Numarasını Giriniz
          </p>
        </div>
        <div className="gap-3 col-span-4 grid grid-cols-2">
          <div className="xl:col-span-1 col-span-2">
            <label>Son Kullanım Tarihi</label>
            <input
              name="expDate"
              placeholder="AA/YY"
              value={values.expDate}
              type="text"
              onChange={(e) => {
                e.target.value.length <= 4 && handleChange(e);
              }}
              onFocus={() => {
                setClicked(false);
              }}
              className={`w-full border-[1px] border-slate-400 rounded-md p-2 ${
                values.expDate.length < 4
                  ? "focus:border-red-600 focus:outline-none focus:ring-0"
                  : isValidExpDate(values.expDate)
                  ? "focus:border-green-600 focus:outline-none focus:ring-0 border-green-600"
                  : "focus:border-red-600 focus:outline-none focus:ring-0"
              }`}
            />
            <p
              className={`my-1 p-2 text-white text-sm rounded-md ${
                !check ? "block bg-[#F66565]" : "hidden"
              }`}
            >
              Lütfen Kartınızın Son Kullanma Tarihini Giriniz
            </p>
          </div>
          <div className="xl:col-span-1 col-span-2">
            <label>CVV</label>
            <input
              name="CVV"
              placeholder="CVV"
              value={values.CVV}
              type="text"
              onChange={(e) => {
                e.target.value.length <= 4 && handleChange(e);
              }}
              onFocus={() => {
                setClicked(true);
              }}
              className={`w-full border-[1px] border-slate-400 rounded-md p-2 ${
                values.CVV.length < 3
                  ? "focus:border-red-600 focus:outline-none focus:ring-0"
                  : isValidCvv(values.CVV)
                  ? "focus:border-green-600 focus:outline-none focus:ring-0 border-green-600"
                  : "focus:border-red-600 focus:outline-none focus:ring-0"
              }`}
            />
            <p
              className={`my-1 p-2 text-white text-sm rounded-md ${
                !check ? "block bg-[#F66565]" : "hidden"
              }`}
            >
              Lütfen Kartınızın Üzerindeki CVV Kodunu Giriniz
            </p>
          </div>
        </div>
      </div>
      <div className="max-xl:block hidden">
        <ThirdSection item={PRIM} />
      </div>
      <button
        type="submit"
        className="my-10 rounded-xl flex justify-center items-center bg-[#44BD32] py-2 text-white text-base w-full"
      >
        Devam Et
      </button>
    </form>
  );
}
