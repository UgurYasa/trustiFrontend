import React from "react";
import { QuestionCard } from "../../DeclarationForm";
import { INSURER } from "../../../constants/FourthStep";
import PaymentForm from "../../PaymentForm";

export default function FifthForm() {
  return (
    <div className=" bg-[#EFF0FF] container min-h-screen">
      <p className=" text-3xl text-[#EB1C74] font-semibold">Sigorta Ettiren</p>
      <div className="w-full h-[1px] bg-slate-400 my-2" />
      <QuestionCard item={INSURER[0]} control={1} />
      <p className=" text-3xl text-[#EB1C74] font-semibold mt-4">Ödeme Türü</p>
      <div className="w-full h-[1px] bg-slate-400 my-2" />
      <PaymentForm />
    </div>
  );
}
