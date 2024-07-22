import React, { useState } from "react";
import Select from "../../Select";
import { AGES } from "../../../../constants/FirstStep";

export default function Checkbox({ item }) {
  const [selected, setSelected] = useState("Seçiniz");

  const onChange = (e) => {
   item.clicked = e.target.checked;
   console.log(item);
  };
  return (
    <div className="flex flex-row items-center justify-between">
     <div className="flex flex-row items-center w-2/3 gap-3">
     <input type="checkbox" onChange={onChange} />
     <span> {item.label}</span>
     </div>
      <div className={`${item.clicked?"visible":"invisible"}`}>
      <Select
        data={AGES}
        isShowTitle={false}
        selected={selected}
        setSelected={setSelected}
      />
        </div>
    </div>
  );
}
