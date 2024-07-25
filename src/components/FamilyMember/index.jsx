import React from "react";
import { censorWords } from "../../constants/Functions";
import { FAMILYMEMBER } from "../../constants/SecondStep";

export default function FamilyMember({ member }) {
  const Card = ({ title }) => {
    return (
      <div
        className={`col-span-1 flex items-center xl:py-4 xl:px-2 my-2 ${
          member.id != 0 && "bg-white"
        }`}
      >
        {title}
      </div>
    );
  };
  const Card2 = ({ title, value }) => {
    return (
      <div className="bg-white grid grid-cols-2">
        <Card title={title + " :"} />
        <Card title={value} />
      </div>
    );
  };
  return (
    <div>
      <div className="xl:block hidden">
        <div className="grid grid-cols-5">
          <Card
            title={member.id === 0 ? member.name : censorWords(member.name)}
          />
          <Card title={member.tcNo} />
          <Card title={member.proximity} />
          <Card title={member.telNo} />
          <Card title={member.risk} />
        </div>
      </div>
      <div className="xl:hidden block my-3 border-[1px] border-slate-500 p-3 bg-white">
        <Card2 title={FAMILYMEMBER[0].name} value={censorWords(member.name)} />
        <Card2 title={FAMILYMEMBER[0].tcNo} value={member.tcNo} />
        <Card2 title={FAMILYMEMBER[0].proximity} value={member.proximity} />
        <Card2 title={FAMILYMEMBER[0].telNo} value={member.telNo} />
        <Card2 title={FAMILYMEMBER[0].risk} value={member.risk} />
      </div>
    </div>
  );
}
