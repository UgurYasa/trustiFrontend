import React from "react";
import { useSelector } from "react-redux";
import { formatNumber } from "../../constants/Functions";
import RadioButton from "../Forms/ThirdForm/RadioButton";

const NetworkDetailCard = React.memo(({ network, setList, list }) => {
  const TreatmentCard = ({ title, amount, item }) => {
    const pricing = formatNumber(amount);

    return (
      <div className="w-full">
        <div
          className="container bg-[#7E7E7E] mt-5 rounded-t-md flex flex-col items-center justify-center py-3"
          style={{
            backgroundColor:
              list[network.id].option[item.id].color === "#FFF"
                ? "#7E7E7E"
                : list[network.id].option[item.id].color,
          }}
        >
          <RadioButton
            value="Evet"
            selectedValue={item.answer}
            item={item}
            setList={setList}
            list={list}
            subIndex={network.id}
          />
          <p className="pt-2 font-semibold text-white text-lg text-center">
            {title}
          </p>
        </div>
        <div className="container bg-white flex flex-col items-center justify-center py-3">
          <p className="pt-2  text-black  text-3xl">
            {pricing} <span className="text-[#7e7e7e]">&#8378;</span>
          </p>
        </div>
      </div>
    );
  };
  const InstitutionCard = ({ title, number, desc }) => {
    return (
      <div className="container bg-[#EFEFEF] flex flex-col justify-center items-center py-2">
        <p className="font-semibold text-[#7e7e7e] text-xl">{title}</p>
        <div className="flex flex-row items-center gap-2">
          <div
            className="py-1 px-1 font-bold text-white rounded-xl"
            style={{ backgroundColor: network.color }}
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
  };

  const { isSearchSelected } = useSelector((state) => state.firstStep);

  return (
    <div className="flex flex-col my-5 py-2">
      <div
        className={`h-12 flex items-center justify-center`}
        style={{ backgroundColor: network.color }}
      >
        <p className="text-white font-black text-2xl ">{`${network.value} Network`}</p>
      </div>

      <InstitutionCard
        title={network.city_Name}
        number={network.city_Organization}
        desc="Pembe Network'e dahil tüm kurumlar"
      />
      <InstitutionCard
        title="Komşu iller"
        number={network.neighbor_City_Organization}
        desc="Pembe Network'e dahil tüm kurumlar"
      />
      <InstitutionCard
        title="Türkiye Geneli"
        number={network.country_Organization}
        desc="Pembe Network'e dahil tüm kurumlar"
      />

      {network.option.map((element, index) => (
        <TreatmentCard
          key={element.coverageId}
          item={element}
          amount={element.amount}
          title={element.title}
        />
      ))}
    </div>
  );
});
export default NetworkDetailCard;