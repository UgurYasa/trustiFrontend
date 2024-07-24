import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSelected: "Seçiniz",
  isSearchSelected: "Seçiniz",
  isCheckBoxSelected: "Seçiniz",
  OpenSelected: false,
  OpenSearchSelected: false,
  OpenCheckBoxSelected: false,
  fiyatAl:false
};

const firstStepSlice = createSlice({
  name: "firstStepSlice",
  initialState,
  reducers: {
    setIsSelected: (state, action) => {
      state.isSelected = action.payload;
    },
    setisSearchSelected: (state, action) => {
      state.isSearchSelected = action.payload;
    },
    setisCheckBoxSelected: (state, action) => {
      state.isCheckBoxSelected = action.payload;
    },
    setOpenSelected: (state, action) => {
      state.OpenSelected = action.payload;
    },
    setOpenSearchSelected: (state, action) => {
      state.OpenSearchSelected = action.payload;
    },
    setOpenCheckBoxSelected: (state, action) => {
      state.OpenCheckBoxSelected = action.payload;
    },
    clearAll : (state) => {
      state.isSelected = "Seçiniz";
      state.isSearchSelected = "Seçiniz";
      state.isCheckBoxSelected = "Seçiniz";
      state.OpenSelected = false;
      state.OpenSearchSelected = false;
      state.OpenCheckBoxSelected = false;
    },
    closeOther: (state, action) => {
      if (action.payload === "OpenSelected") {
        state.OpenSearchSelected = false;
        state.OpenCheckBoxSelected = false;
      } else if (action.payload === "OpenSearchSelected") {
        state.OpenSelected = false;
        state.OpenCheckBoxSelected = false;
      } else {
        state.OpenSelected = false;
        state.OpenSearchSelected = false;
      }
    },
    setFiyatAl:(state,action)=>{
      state.fiyatAl = action.payload
    }
  },
});

export const {
  setIsSelected,
  setisSearchSelected,
  setisCheckBoxSelected,
  setOpenSelected,
  setOpenCheckBoxSelected,
  setOpenSearchSelected,
  closeOther,
  clearAll,
  setFiyatAl
} = firstStepSlice.actions;
export default firstStepSlice.reducer;
