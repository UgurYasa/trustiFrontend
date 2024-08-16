import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setClicked, setPrim } from "../../../../redux/thirdStepSlice";

export default function RadioButton({ subIndex, value, setList, item, list }) {
  const dispatch = useDispatch();
  const [localColor, setLocalColor] = useState(item.color || "#FFF");
  
  const updateAnswer = () => {
    // Güncellenmiş listeyi oluştur
    const updatedList = list.map((element) =>
      element.id === subIndex
        ? {
            ...element,
            option: element.option.map((opt) =>
              opt.id === item.id
                ? { ...opt, answer: value, color: list[subIndex].color }
                : { ...opt, color: "#FFF", answer: "" }
            ),
          }
        : element
    );

    setList(updatedList); // Listeyi güncelle

    // PRIM'i güncelle
    dispatch(
      setPrim({
        proximity: "Kendisi",
        amount: item.amount,
        description: `${list[subIndex].title} - ${item.title}`,
        color: list[subIndex].color,
        title: list[subIndex].title,
        isInpatient: item.id === 0,
        coverageId: item.coverageId,
      })
    );
    dispatch(setClicked(true));
  };

  useEffect(() => {
    // Liste güncellendiğinde yerel rengi güncelle
    setLocalColor(list[subIndex].option[item.id].color);
  }, [list, subIndex, item.id]);

  return (
    <div
      className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center cursor-pointer"
      onClick={() => {
        updateAnswer(); // Tıklama ile güncelleme
      }}
    >
      <div
        className="w-3 h-3 rounded-full"
        style={{ backgroundColor: localColor }}
      />
    </div>
  );
}
