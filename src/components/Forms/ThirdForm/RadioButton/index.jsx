import React from "react";
import { Radio } from "@mui/material";
import { styled } from "@mui/material/styles";

import { blue } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { setPrim } from "../../../../redux/thirdStepSlice";
import { setClicked } from "../../../../redux/thirdStepSlice";
export default function RadioButton({ subIndex, value, setList, item, list }) {
  const dispatch = useDispatch();
  const clearAll = () => {
    setList((prevList) =>
      prevList.map((item) => ({
        ...item,
        option: item.option.map((opt) => ({ ...opt, answer: "" })),
      }))
    );
  };

  const updateAnswer = (subIndex, newAnswer) => {
    clearAll();
    setList((prevList) =>
      prevList.map((element) =>
        element.id === subIndex
          ? {
              ...element,
              option: element.option.map((opt) =>
                opt.id === item.id ? { ...opt, answer: newAnswer } : opt
              ),
            }
          : element
      )
    );
  };

  /*
   PRIM: {
    proximity: "",
    title: "Paket Seçiniz",
    amount: 0,
  }, */
  const BpIcon = styled("span")(({ theme }) => ({
    borderRadius: "50%",
    width: 20,
    height: 20,
    padding: 10,
    backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  }));
  return (
    <Radio
      checked={list[subIndex].option[item.id].answer === value}
      onChange={(e) => {
        updateAnswer(subIndex, e.target.value);
        dispatch(
          setPrim({
            proximity: "Kendisi",
            amount: item.amount,
            description: list[subIndex].title + "-" + item.title,
            color: list[subIndex].color,
            title: list[subIndex].title,
            isInpatient: item.id===0?true:false,
          })
        );
        dispatch(setClicked(true));
      }}
      value={value}
      sx={{
        color: blue[800],
        "&.Mui-checked": {
          color: blue[600],
        },
      }}
      icon={<BpIcon />}
      name="radio-buttons"
    />
  );
}
