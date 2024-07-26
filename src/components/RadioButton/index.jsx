import React from "react";
import { Radio } from "@mui/material";
export default function RadioButton({ value, setList, item,control }) {
  const updateAnswer = (id, newAnswer) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, answer: newAnswer } : item
      )
    );
  };

  const allChecked = () => {
    setList((prevList) =>
      prevList.map((item) => ({ ...item, answer: "Hayır" }))
    );
  };

  return (
    <Radio
      checked={item.answer === value}
      onChange={(e) => {
        control&&item.id === 0 && allChecked();
        updateAnswer(item.id, e.target.value);
        console.log(e.target.value);
      }}
      value={value}
      name="radio-buttons"
    />
  );
}
