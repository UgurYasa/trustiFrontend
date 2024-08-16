import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FamilyMember from "../../FamilyMember";
import { FaPlus } from "react-icons/fa6";
import SecondSection from "../../Sections/SecondSection";
import { useDispatch, useSelector } from "react-redux";
import { useCustomerById } from "../../../services/hooks/customers";
import { setFamilyMember } from "../../../redux/secondStepSlice";
import { formatDateToYYYYMMDD } from "../../../constants/Functions";
import Loading from "../../Loading";
export default function SecondForm({ CustomerId }) {
  const navigate = useNavigate();
  const { FAMILYMEMBERS } = useSelector((state) => state.secondStep);
  const { data, isLoading, isError } = useCustomerById(
    () => {},
    () => {},
    CustomerId
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      dispatch(
        setFamilyMember({
          id: data.data.customer_No,
          city_Id: data.data.city_Id,
          name: data.data.first_Name + " " + data.data.last_Name,
          tcNo: data.data.tckNo,
          telNo: data.data.phone,
          proximity: data.data.family_Member,
          risk: data.data.city_Name,
          birthDate: formatDateToYYYYMMDD(data.data.birth_Date),
        })
      );
    }
  }, [data]);
  return (
    <div className=" bg-[#EFF0FF] container min-h-screen w-full py-4">
      <p className=" text-3xl text-[#EB1C74] font-semibold">Aile Üyeleri</p>
      <div className="w-full h-[1px] bg-slate-400 my-2" />
      {FAMILYMEMBERS.map((member, index) => (
        <div className={`${member.id === 0 && "xl:block hidden"}`} key={index}>
          <FamilyMember key={index} member={member} />
        </div>
      ))}
      <div className="max-xl:block xl:hidden">
        <SecondSection member={FAMILYMEMBERS[1]} />
      </div>
      <div className="flex xl:flex-row flex-col items-center xl:justify-between">
        <button
          onClick={() => {
            navigate("/yeni_kisi_ekle");
          }}
          className="my-10 rounded-xl flex justify-center items-center bg-[#44BD32] py-2 text-white text-base  lg:w-1/3 w-full lg:px-5 gap-2"
        >
          <FaPlus />
          <div>Yeni Kişi Ekle</div>
        </button>
        <button
          onClick={() => {
            navigate("/info/3/" + CustomerId+"/"+data.data.city_Id);
          }}
          className="xl:my-10 rounded-xl flex justify-center items-center bg-[#44BD32] py-2 text-white text-base lg:w-1/3 w-full"
        >
          Devam Et
        </button>
      </div>
    </div>
  );
}
