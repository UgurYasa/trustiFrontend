import { createSlice } from "@reduxjs/toolkit";
import { useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import 'animate.css';
const initialState = {
  isSelected: "Seçiniz",
  isSearchSelected: 0,
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
      state.fiyatAl = false;
    },
    setOpenSearchSelected: (state, action) => {
      state.OpenSearchSelected = action.payload;
      state.fiyatAl = false;
    },
    setOpenCheckBoxSelected: (state, action) => {
      state.OpenCheckBoxSelected = action.payload;
      state.fiyatAl = false;
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
      !state.fiyatAl &&
        Swal.fire({
          title: "Lütfen tüm alanları doldurunuz.",
          icon: "warning",
          showClass: {
            popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
          },
          hideClass: {
            popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
          },
        });
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
