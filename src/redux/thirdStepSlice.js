import { createSlice } from "@reduxjs/toolkit";
import { NETWORKS } from "../constants/ThirdStep";

const initialState = {
  PRIM: {
    proximity: "",
    title: "Paket Seçiniz",
    amount: 0,
    color: "",
    description: "",
    isInpatient:false,
  },
  clicked: false,
};
const thirdStepSlice = createSlice({
  name: "thirdStepSlice",
  initialState,
  reducers: {
    setPrim: (state, action) => {
      state.PRIM.proximity = action.payload.proximity;
      state.PRIM.amount = action.payload.amount;
      state.PRIM.title = action.payload.title;
      state.PRIM.color = action.payload.color;
      state.PRIM.description = action.payload.description;
      state.PRIM.isInpatient = action.payload.isInpatient;
    },
    setProximity: (state, action) => {
      state.PRIM.proximity = action.payload;
    },
    setTitle: (state, action) => {
      state.PRIM.title = action.payload;
    },
    setAmount: (state, action) => {
      state.PRIM.amount = action.payload;
    },
    setClicked: (state, action) => {
      state.clicked = action.payload;
    },
  },
});

export const { setPrim, setProximity, setTitle, setAmount, setClicked } =
  thirdStepSlice.actions;
export default thirdStepSlice.reducer;
