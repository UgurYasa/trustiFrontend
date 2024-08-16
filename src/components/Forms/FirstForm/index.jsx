import React, { useState } from "react";
import { useFormik } from "formik";
import {
  EmailValidation,
  PhoneNumberValidation,
  TCKValidation,
  validateDate,
} from "./validations";
import { useNavigate, useParams } from "react-router-dom";
import { VALIDATIONERRORS } from "../../../constants/SecondStep";
import {
  useCustomerByTCKNo,
  usePostAddCustomer,
  usePutUpdateCustomer,
} from "../../../services/hooks/customers";
import { formatDateToYYYYMMDD } from "../../../constants/Functions";
import { useDispatch, useSelector } from "react-redux";
import { setFamilyMember } from "../../../redux/secondStepSlice";
import { useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import "animate.css";
export default function FirstForm({ click, setClick }) {
  const navigate = useNavigate();
  const {customer_No} = useParams();
  console.log(customer_No.split("-"));
  
  const CheckValidation = (values, isUpdated = false) => {
    return (
      TCKValidation(values.tcNo) &&
      values.birthDate !== "" &&
      values.name !== "" &&
      EmailValidation(values.email) &&
      PhoneNumberValidation(values.telNo) &&
      (values.checkbox.length === 3 || isUpdated)
    );
  };
  const onSuccess = (title) => {
    Swal.fire({
      title: title,
      icon: "success",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
      },
    });
  };
  const onError = () => {
    Swal.fire({
      title: "Hata oluştu. Lütfen tekrar deneyiniz.",
      icon: "error",
      showClass: {
        popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `,
      },
      hideClass: {
        popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `,
      },
    });
  };

  const { mutate: add } = usePostAddCustomer(
    () => {
      onSuccess("Kaydınız başarıyla oluşturuldu.");
    },
    () => {
      onError();
    }
  );
  const { mutate: update } = usePutUpdateCustomer(
    () => {
      onSuccess("Bilgileriniz güncellendi.");
    },
    () => {
      onError();
    }
  );
  const { handleSubmit, handleChange, values, setFieldValue } = useFormik({
    initialValues: {
      tcNo: "",
      birthDate: "",
      name: "",
      email: "",
      telNo: "",
      checkbox: [],
    },
    onSubmit: (values) => {
      if (filterCustomer == null) {
        if (CheckValidation(values)) {
          add({
            tckNo: values.tcNo,
            birth_Date: new Date(values.birthDate).toISOString(),
            first_Name: values.name.split(" ").slice(0, -1).join(" "),
            last_Name: values.name.split(" ").slice(-1)[0],
            email: values.email,
            phone: values.telNo,
            gender: customer_No.split("-")[0] === "Seçiniz" ? "Erkek" : customer_No.split("-")[0],
            family_Member:
              customer_No.split("-")[2] === "Kendim" ||
              customer_No.split("-")[2] === "Seçiniz"
                ? "Kendi"
                : customer_No.split("-")[2],
            city_Id:
              customer_No.split("-")[1] === "Seçiniz" || customer_No.split("-")[1] <= 0
                ? 1
                : customer_No.split("-")[1],
          });
          handleTCKNoBlur();
        } else {
          setClick(false);
        }
      } else {
        if (CheckValidation(values)) {
          queryClient.clear();
          navigate("/info/2/" + filterCustomer.data.customer_No);
        } else {
          setClick(false);
        }
      }
    },
  });
  // Filter Customer By TCKNO
  const { data: filterCustomer } = useCustomerByTCKNo(
    () => {},
    () => {},
    values.tcNo && values.tcNo.length === 11 ? values.tcNo : ""
  );
  const queryClient = useQueryClient();
  const handleTCKNoBlur = () => {
    queryClient.removeQueries({ queryKey: ["CustomerByTCKNo"] });

    // Yeni veriyi çekmek için yeniden çalıştır
    queryClient.invalidateQueries({ queryKey: ["CustomerByTCKNo"] });

    if (TCKValidation(values.tcNo) && filterCustomer.data) {
      setFieldValue("tcNo", filterCustomer.data.tckNo);
      setFieldValue(
        "birthDate",
        formatDateToYYYYMMDD(filterCustomer.data.birth_Date)
      );
      setFieldValue(
        "name",
        `${filterCustomer.data.first_Name} ${filterCustomer.data.last_Name}`
      );
      setFieldValue("email", filterCustomer.data.email);
      setFieldValue("telNo", filterCustomer.data.phone);
    }
    setTcNoFocused(false);
  };
  // Farklı alanlar için state'leri yönetin
  const [tcNoFocused, setTcNoFocused] = useState(false);
  const [birthDateFocused, setBirthDateFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [telNoFocused, setTelNoFocused] = useState(false);

  const [hasTcNoFocusedOnce, setHasTcNoFocusedOnce] = useState(false);
  const [hasBirthDateFocusedOnce, setHasBirthDateFocusedOnce] = useState(false);
  const [hasEmailFocusedOnce, setHasEmailFocusedOnce] = useState(false);
  const [hasTelNoFocusedOnce, setHasTelNoFocusedOnce] = useState(false);
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
              onChange={(e) => {
                e.target.value.length <= 11 && handleChange(e);
              }}
              onBlur={handleTCKNoBlur}
              onFocus={() => {
                setTcNoFocused(true);
                setHasTcNoFocusedOnce(true);
              }}
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
                !tcNoFocused &&
                hasTcNoFocusedOnce &&
                !TCKValidation(values.tcNo)
                  ? "block bg-[#F66565]"
                  : "hidden"
              }`}
            >
              {!TCKValidation(values.tcNo) && values.tcNo.trim() === ""
                ? VALIDATIONERRORS[0][0]
                : values.tcNo.length > 0 && !TCKValidation(values.tcNo)
                ? VALIDATIONERRORS[0][1]
                : ""}
            </p>
          </div>
          <div className="md:col-span-2 col-span-4">
            <label>Doğum Tarihi</label>
            <input
              name="birthDate"
              value={values.birthDate}
              type="date"
              onChange={handleChange}
              onBlur={() => setBirthDateFocused(false)}
              onFocus={() => {
                setBirthDateFocused(true);
                setHasBirthDateFocusedOnce(true);
              }}
              className={`w-full border-[1px] border-slate-400 rounded-md p-2 ${
                values.birthDate
                  ? "focus:border-green-600 focus:outline-none focus:ring-0 border-green-600"
                  : "focus:border-red-600 focus:outline-none focus:ring-0"
              }`}
            />
            <p
              className={`my-1 p-2 text-white text-sm rounded-md ${
                !birthDateFocused &&
                hasBirthDateFocusedOnce &&
                !validateDate(values.birthDate)
                  ? "block bg-[#F66565]"
                  : "hidden"
              }`}
            >
              {!validateDate(values.birthDate) && values.birthDate.trim() === ""
                ? VALIDATIONERRORS[1][0]
                : values.birthDate != "" && !validateDate(values.birthDate)
                ? VALIDATIONERRORS[1][1]
                : ""}
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
              type="email"
              onChange={handleChange}
              onBlur={() => setEmailFocused(false)}
              onFocus={() => {
                setEmailFocused(true);
                setHasEmailFocusedOnce(true);
              }}
              className={`w-full border-[1px] border-slate-400 rounded-md p-2 ${
                EmailValidation(values.email)
                  ? "focus:border-green-600 focus:outline-none focus:ring-0 border-green-600"
                  : "focus:border-red-600 focus:outline-none focus:ring-0"
              }`}
            />
            <p
              className={`my-1 p-2 text-white text-sm rounded-md ${
                !emailFocused &&
                hasEmailFocusedOnce &&
                !EmailValidation(values.email)
                  ? "block bg-[#F66565]"
                  : "hidden"
              }`}
            >
              {!EmailValidation(values.email) && values.email.trim() === ""
                ? VALIDATIONERRORS[2][0]
                : values.email != "" && !EmailValidation(values.email)
                ? VALIDATIONERRORS[2][1]
                : ""}
            </p>
          </div>

          <div className="md:col-span-2 col-span-4">
            <label>Cep Telefonu Numarası</label>
            <input
              name="telNo"
              value={values.telNo}
              onChange={(e) => {
                e.target.value.length <= 13 && handleChange(e);
              }}
              onBlur={() => setTelNoFocused(false)}
              onFocus={() => {
                setTelNoFocused(true);
                setHasTelNoFocusedOnce(true);
              }}
              className={`w-full border-[1px] border-slate-400 rounded-md p-2 ${
                PhoneNumberValidation(values.telNo)
                  ? "focus:border-green-600 focus:outline-none focus:ring-0 border-green-600"
                  : "focus:border-red-600 focus:outline-none focus:ring-0"
              }`}
            />
            <p
              className={`my-1 p-2 text-white text-sm rounded-md ${
                !telNoFocused &&
                hasTelNoFocusedOnce &&
                !PhoneNumberValidation(values.telNo)
                  ? "block bg-[#F66565]"
                  : "hidden"
              }`}
            >
              {!PhoneNumberValidation(values.telNo) &&
              values.telNo.trim() === ""
                ? VALIDATIONERRORS[3][0]
                : values.telNo != "" && !PhoneNumberValidation(values.telNo)
                ? VALIDATIONERRORS[3][1]
                : ""}
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
            <a
              href="https://quicksigorta.com/gizlilik-politikasi"
              target="_blank"
              className="text-[#EB1C74] hover:text-blue-950 cursor-pointer"
            >
              Gizlilik Politikası
            </a>{" "}
            ,{" "}
            <a
              href="https://quicksigorta.com/kullanici-sozlesmesi"
              target="_blank"
              className="text-[#EB1C74] hover:text-blue-950 cursor-pointer"
            >
              Kullanıcı Sözleşmesi
            </a>{" "}
            ve{" "}
            <a
              href="https://kurumsal.quicksigorta.com/pdf/bilgilendirme/Quick-Sigorta-Zorunlu-Trafik-Sigortasi-Bilgilendirme-Formu.pdf"
              target="_blank"
              className="text-[#EB1C74] hover:text-blue-950 cursor-pointer"
            >
              Poliçe Bilgilendirme Formu&#39;nu
            </a>{" "}
            okudum ve kabul ediyorum.
          </div>
        </div>
        <p
          className={` mb-2 p-2 text-white text-xs rounded-md w-full ${
            values.checkbox.includes("Gizlilik Sözleşmesi")
              ? "hidden"
              : !click
              ? "block bg-[#F66565]"
              : "hidden"
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
            <a
              href="https://www.quicksigorta.com/kisisel-verilerin-korunmasi-ve-islenmesi-politikasi"
              target="_blank"
              className="text-[#EB1C74] hover:text-blue-950 cursor-pointer"
            >
              KVKK Aydınlatma Metni&#39;ni
            </a>{" "}
            okudum ve kabul ediyorum.
          </p>
        </div>
        <p
          className={` mb-2 p-2 text-white text-xs rounded-md md:w-1/2 w-full ${
            values.checkbox.includes("KVKK Sözleşmesi")
              ? "hidden"
              : !click
              ? "block bg-[#F66565]"
              : "hidden"
          }`}
        >
          {VALIDATIONERRORS[5]}
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
            <a
              href="https://www.quicksigorta.com/acik-riza-metni"
              target="_blank"
              className="text-[#EB1C74] hover:text-blue-950 cursor-pointer"
            >
              Açık Rıza Metni
            </a>{" "}
            kapsamında kişisel verilerimin işlenmesine rıza gösteriyorum.
          </div>
        </div>

        <div className="grid grid-cols-3 md:gap-3 gap-5 my-10">
          <button
            disabled={!CheckValidation(values)}
            type="submit"
            className={`rounded-xl flex justify-center items-center bg-[#44BD32] py-2 text-white text-base w-full ${
              !CheckValidation(values) && "opacity-50"
            } ${filterCustomer ? "md:col-span-2 col-span-3" : "col-span-3"}`}
          >
            {filterCustomer != null ? "Devam Et" : "Kayıt Ol"}
          </button>

          <button
            type="button"
            className={` rounded-xl flex justify-center items-center bg-[#44BD32] py-2 text-white text-base w-full ${
              !CheckValidation(values, true) && "opacity-50"
            } ${
              filterCustomer != null
                ? "block md:col-span-1 col-span-3"
                : "hidden"
            }`}
            onClick={() => {
              if (filterCustomer != null) {
                if (CheckValidation(values, true)) {
                  update({
                    customer_No: filterCustomer.data.customer_No,
                    tckNo: values.tcNo,
                    birth_Date: new Date(values.birthDate).toISOString(),
                    first_Name: values.name.split(" ").slice(0)[0],
                    last_Name: values.name.split(" ").slice(-1)[0],
                    email: values.email,
                    phone: values.telNo,
                    gender: customer_No.split("-")[0] === "Seçiniz" ? "Erkek" : customer_No.split("-")[0],
                    family_Member:
                      customer_No.split("-")[2] === "Kendim" ||
                      customer_No.split("-")[2] === "Seçiniz"
                        ? "Kendi"
                        : customer_No.split("-")[2],
                    city_Id: customer_No.split("-")[1],
                  });
                } else {
                  setClick(false);
                }
                // handleTCKNoBlur();
              }
            }}
          >
            Bilgilerimi Güncelle
          </button>
        </div>
      </div>
    </form>
  );
}
