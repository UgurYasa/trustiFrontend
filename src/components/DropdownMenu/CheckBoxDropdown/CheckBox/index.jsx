import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addisCheckBoxSelected,
  deleteisCheckBoxSelected,
} from "../../../../redux/firstStepSlice";

export default function Checkbox({ item }) {
  const dispatch = useDispatch();
  const { isCheckBoxSelected } = useSelector((state) => state.firstStep);
  const onChange = (e) => {
    e.target.checked
      ? dispatch(addisCheckBoxSelected(item.label))
      : dispatch(deleteisCheckBoxSelected(item.label));
  };
  return (
    <div className="flex flex-row items-center justify-between cursor-pointer">
      <div className="flex flex-row items-center w-2/3 gap-3">
        <input
          type="checkbox"
          onChange={onChange}
          checked={isCheckBoxSelected.find((user) => user === item.label)}
        />
        <span> {item.label}</span>
      </div>
      {/* <div className={`${item.clicked?"visible":"invisible"}`}>
      <Select
        data={AGES}
        isShowTitle={false}
        selected={selected}
        setSelected={setSelected}
      />
        </div> */}
    </div>
  );
}
