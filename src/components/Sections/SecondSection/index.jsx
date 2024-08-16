import React, { useEffect } from "react";
import { calculateAge, censorWords, formatDateToYYYYMMDD } from "../../../constants/Functions";
import { FAMILYMEMBER } from "../../../constants/SecondStep";
import { useDispatch, useSelector } from "react-redux";
import { useCustomerById } from "../../../services/hooks/customers";
import { setFamilyMember } from "../../../redux/secondStepSlice";
import { useParams } from "react-router-dom";
export default function SecondSection({ member }) {
  const { customer_No } = useParams();
  const { data, isLoading, isError } = useCustomerById(
    () => {},
    () => {},
    customer_No
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
  const { FAMILYMEMBERS } = useSelector((state) => state.secondStep);
  member = member ? member : FAMILYMEMBER[1];
  return (
    <div className="py-4 bg-white max-lg:p-2">
      <p className="text-[#EB1C74] text-lg font-semibold">Sigortalılar</p>
      <div className="grid grid-cols-6">
        <p className="2xl:col-span-3 col-span-6 flex items-center">
          {censorWords(FAMILYMEMBERS[1].name)}
        </p>
        <p className="2xl:col-span-2 xl:col-span-3 col-span-6 flex justify-center">
          {calculateAge(FAMILYMEMBERS[1].birthDate)} Yaş
        </p>
        <p className="2xl:col-span-1 xl:col-span-3 col-span-6 flex justify-center">
          {FAMILYMEMBERS[1].proximity}
        </p>
      </div>

      <p className="text-[#EB1C74] text-lg font-semibold">Adres</p>
      <p>{censorWords(FAMILYMEMBERS[1].address)}</p>
    </div>
  );
}
