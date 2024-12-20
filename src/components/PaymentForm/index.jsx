import React, { useEffect, useState } from "react";
import { clearAll } from "../../redux/firstStepSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
import ThirdSection from "../Sections/ThirdSection";
import { BackCard } from "./CreditCard/BackCard";
import { FrontCard } from "./CreditCard/FrontCard";
import { usePostAddPayment } from "../../services/hooks/payments";
import Swal from "sweetalert2";

export default function PaymentForm({ isValid }) {
  const { customer_No } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { PRIM } = useSelector((state) => state.thirdStep);

  const [clicked, setClicked] = useState(false);
  const [card, setCard] = useState("XXXX-XXXX-XXXX-XXXX");
  const [date, setDate] = useState("AA/YY");
  const [cvv, setCvv] = useState("CVV");
  const [check, setCheck] = useState(true);

  const { mutate } = usePostAddPayment(
    () => {
      navigate("/info/6/" + customer_No);
    },
    () => {}
  );
  function formatExpDateWithLastDay(expDate) {
    if (expDate.length !== 4) {
      throw new Error("expDate must be 4 characters long");
    }

    const month = expDate.slice(0, 2);
    const year = expDate.slice(2);

    // 2 karakterli yıl, 4 karakterli yıla dönüştürülüyor
    const fullYear = `20${year}`;

    // Ayın son gününü bulma
    const lastDay = new Date(fullYear, month, 0).getDate();
    return new Date(`${fullYear}-${month}-${lastDay}`).toISOString();
  }
  const CardValidation = (values) =>
    isValidCardNumber(values.cardNo) &&
    isValidExpDate(values.expDate) &&
    isValidCvv(values.CVV) &&
    isValidName(values.fName, values.lName) &&
    isValid;
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      fName: "",
      lName: "",
      CVV: "",
      cardNo: "",
      expDate: "",
    },
    onSubmit: (values) => {
      if (CardValidation(values)) {
        Swal.fire({
          title: "Ödeme Yapmak İstediğinize Emin Misiniz?",
          showDenyButton: true,
          confirmButtonText: "Ödeme Yap",
          denyButtonText: `Vazgeç`,
        }).then((result) => {
          if (result.isConfirmed) {
            mutate({
              policy_No: 1,
              customer_No: parseInt(customer_No),
              card_No: values.cardNo,
              cvv: values.CVV,
              expiry_Date: formatExpDateWithLastDay(values.expDate),
            });
            Swal.fire("Ödeme Başarılı", "", "success");
          } else if (result.isDenied) {
            Swal.fire("Ödeme Yapılamadı", "", "info");
          }
        });
      } else {
        setCheck(false);
      }

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
              isValidName(values.fName, values.lName)
                ? "hidden"
                : !check
                ? "block bg-[#F66565]"
                : "hidden"
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
              isValidName(values.fName, values.lName)
                ? "hidden"
                : !check
                ? "block bg-[#F66565]"
                : "hidden"
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
            value={values.cardNo.replace(/(\d{4})(?=\d)/g, "$1-")}
            type="text"
            onChange={(e) => {
              const value = e.target.value.replace(/-/g, ""); // "-" işaretlerini kaldırarak orijinal sayıyı al
              if (value.length <= 16) {
                handleChange({
                  target: {
                    name: e.target.name,
                    value: value, // Orijinal numarayı sakla
                  },
                });
              }
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
              isValidCardNumber(values.cardNo)
                ? "hidden"
                : !check
                ? "block bg-[#F66565]"
                : "hidden"
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
  value={values.expDate.replace(/(\d{2})(?=\d)/, "$1/")}
  type="text"
  onChange={(e) => {
    const value = e.target.value.replace(/\//g, ''); // "/" işaretlerini kaldırarak orijinal sayıyı al
    if (value.length <= 4) {
      handleChange({
        target: {
          name: e.target.name,
          value: value, // Orijinal numarayı sakla
        }
      });
    }
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
                isValidExpDate(values.expDate)
                  ? "hidden"
                  : !check
                  ? "block bg-[#F66565]"
                  : "hidden"
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
                isValidCvv(values.CVV)
                  ? "hidden"
                  : !check
                  ? "block bg-[#F66565]"
                  : "hidden"
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
