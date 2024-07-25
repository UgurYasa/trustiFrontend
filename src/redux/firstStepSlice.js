import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSelected: "Seçiniz",
  isSearchSelected: "Seçiniz",
  isCheckBoxSelected: ["Seçiniz"],
  OpenSelected: false,
  OpenSearchSelected: false,
  OpenCheckBoxSelected: false,
  fiyatAl: false,
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
    addisCheckBoxSelected: (state, action) => {
      state.isCheckBoxSelected = [action.payload, ...state.isCheckBoxSelected];
    },
    deleteisCheckBoxSelected: (state, action) => {
      state.isCheckBoxSelected = state.isCheckBoxSelected.filter(
        (item) => item != action.payload
      );
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
    clearAll: (state) => {
      state.isSelected = "Seçiniz";
      state.isSearchSelected = "Seçiniz";
      state.isCheckBoxSelected = ["Seçiniz"];
      state.OpenSelected = false;
      state.OpenSearchSelected = false;
      state.OpenCheckBoxSelected = false;
      state.fiyatAl = false;
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
    setFiyatAl: (state) => {
      state.isSelected != "Seçiniz" &&
      state.isSearchSelected != "Seçiniz" &&
      state.isCheckBoxSelected != ["Seçiniz"]
        ? (state.fiyatAl = true)
        : (state.fiyatAl = false);
      !state.fiyatAl && alert("Lütfen tüm alanları doldurunuz.");
    },
  },
});

export const {
  setIsSelected,
  setisSearchSelected,
  addisCheckBoxSelected,
  deleteisCheckBoxSelected,
  setOpenSelected,
  setOpenCheckBoxSelected,
  setOpenSearchSelected,
  closeOther,
  clearAll,
  setFiyatAl,
} = firstStepSlice.actions;
export default firstStepSlice.reducer;
