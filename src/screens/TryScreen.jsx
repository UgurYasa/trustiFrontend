import { Radio } from "@mui/material";
import React, { useState } from "react";
import RadioButton from "../components/Forms/ThirdForm/RadioButton";
import { DECLARATION } from "../constants/FourthStep";
import { NETWORKS } from "../constants/ThirdStep";

export default function TryScreen() {
  const [list, setList] = useState(NETWORKS);
  const [id, setId] = useState({
    proximity: "",
    title: "Paket Seçiniz",
    amount: 0,
  });

  return (
    <div>
      {list.map((element, index) => (
        <div key={index}>
          <label>{element.title}</label>

          {element.option.map((item, index) => (
            <RadioButton
              key={index}
              value="Evet"
              selectedValue={item.answer}
              item={item}
              setList={setList}
              subIndex={element.id}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
