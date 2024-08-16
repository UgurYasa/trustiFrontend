import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function formatNumber(num) {
  let str = num.toFixed(2);
  str = str.replace(".", ",");
  let parts = str.split(",");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return parts.join(",");
}

const TreatmentCard = ({
  title,
  amount,
  color,
  isSelected,
  isSearchSelected,
  isCheckBoxSelected,
}) => {
  const queryClient = useQueryClient();
  const pricing = formatNumber(amount);

  return (
    <div className="w-full">
      <div className="container bg-[#7E7E7E] mt-5 rounded-t-md flex items-center justify-center py-3">
        <p className="pt-2 font-semibold text-white text-lg">{title}</p>
      </div>
      <div className="container bg-white flex flex-col items-center justify-center py-3">
        <p className="pt-2  text-black  text-3xl">
          {pricing} <span className="text-[#7e7e7e]">&#8378;</span>
        </p>
        <Link
          className="mt-4 w-full text-center text-white text-lg rounded-xl"
          style={{ backgroundColor: color }}
          to={`/info/1/${isSelected}-${isSearchSelected}-${isCheckBoxSelected}`}
          onClick={() => {
            queryClient.removeQueries({ queryKey: ["Coverage"] });
          }}
        >
          Satın Al
        </Link>
      </div>
    </div>
  );
};

const InstitutionCard = ({ title, number, desc, color }) => (
  <div className="container bg-[#EFEFEF] flex flex-col justify-center items-center py-2">
    <p className="font-semibold text-[#7e7e7e] text-xl">{title}</p>
    <div className="flex flex-row items-center gap-2">
      <div
        className="py-1 px-1 font-bold text-white rounded-xl"
        style={{ backgroundColor: color }}
      >
        {number}
      </div>
      <div className="text-base hover:underline cursor-pointer">
        Sağlık Kurumu
      </div>
    </div>
    <div className="my-5">{desc}</div>
  </div>
);

export default function NetworkCard({ network }) {
  const { isSelected, isSearchSelected, isCheckBoxSelected } = useSelector(
    (state) => state.firstStep
  );
  
  

  return (
    <div className="flex flex-col my-5 py-2">
      <div
        className={`h-12 flex items-center justify-center`}
        style={{ backgroundColor: network.color }}
      >
        <p className="text-white font-black text-2xl ">{`${network.title} Network`}</p>
      </div>
      <div className="container bg-[#EFEFEF] flex flex-col justify-center items-center">
        <TreatmentCard
          amount={network.yatarakTedaviFiyat}
          title="Yatarak Tedavi"
          color={network.color}
          isSelected={isSelected}
          isSearchSelected={isSearchSelected}
          isCheckBoxSelected={isCheckBoxSelected[0]}
        />
        <TreatmentCard
          amount={network.yatarakveayaktaFiyat}
          title="Yatarak ve Ayakta Tedavi"
          color={network.color}
          isSelected={isSelected}
          isSearchSelected={isSearchSelected}
          isCheckBoxSelected={isCheckBoxSelected[0]}
        />
      </div>
      <InstitutionCard
        title={network.city ? network.city : isSearchSelected}
        number={network.city_Organization}
        desc={`${network.title} Network'e dahil tüm kurumlar`}
        color={network.color}
      />
      <InstitutionCard
        title="Komşu iller"
        number={network.neighbor_City_Organization}
        desc={`${network.title} Network'e dahil tüm kurumlar`}
        color={network.color}
      />
      <InstitutionCard
        title="Türkiye Geneli"
        number={network.country_Organization}
        desc={`${network.title} Network'e dahil tüm kurumlar`}
        color={network.color}
      />
    </div>
  );
}
