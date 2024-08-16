import { createSlice } from "@reduxjs/toolkit";
import { NETWORKS } from "../constants/ThirdStep";

const initialState = {
  PRIM: {
    proximity: "",
    title: "Paket Seçiniz",
    amount: 0,
    color: "",
    description: "",
    isInpatient: false,
    coverageId: 0,
  },
  clicked: false,
  NETWORKSDETAILSDATA: [NETWORKS],
};
const thirdStepSlice = createSlice({
  name: "thirdStepSlice",
  initialState,
  reducers: {
    setPrim: (state, action) => {
      if (state.PRIM.proximity !== action.payload.proximity) {
        state.PRIM.proximity = action.payload.proximity;
      }
      if (state.PRIM.amount !== action.payload.amount) {
        state.PRIM.amount = action.payload.amount;
      }
      if (state.PRIM.title !== action.payload.title) {
        state.PRIM.title = action.payload.title;
      }
      if (state.PRIM.color !== action.payload.color) {
        state.PRIM.color = action.payload.color;
      }
      if (state.PRIM.description !== action.payload.description) {
        state.PRIM.description = action.payload.description;
      }
      if (state.PRIM.isInpatient !== action.payload.isInpatient) {
        state.PRIM.isInpatient = action.payload.isInpatient;
      }
      if (state.PRIM.coverageId !== action.payload.coverageId) {
        state.PRIM.coverageId = action.payload.coverageId || 0;
      }
    },
    clearPrim: (state) => {
      state.PRIM.proximity = "";
      state.PRIM.amount = 0;
      state.PRIM.title = "Paket Seçiniz";
      state.PRIM.color = "";
      state.PRIM.description = "";
      state.PRIM.isInpatient = false;
      state.clicked = false;
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
    setNetworksDetailsData: (state, action) => {
      const colors = ["#EB1C74", "#44BD32", "#1F2346"];
      const networks = ["pembe", "yeşil", "lacivert"].map((color, index) => ({
        id: index,
        title: action.payload[index * 2].coverage_Network + " Network",
        value: action.payload[index * 2].coverage_Network,
        color: colors[index],
        city_Name: action.payload[index * 2].city_Name,
        city_Organization:action.payload[index * 2].city_Organization,
        country_Organization:action.payload[index * 2].country_Organization,
        neighbor_City_Organization:action.payload[index * 2].neighbor_City_Organization,
        option: [
          {
            id: 0,
            title: action.payload[index * 2].coverage_Model,
            amount: action.payload[index * 2].coverage_Amount,
            answer: "",
            coverageId: action.payload[index * 2].coverage_Code,
            color: "#FFF",
          },
          {
            id: 1,
            title: action.payload[index * 2 + 1].coverage_Model,
            amount: action.payload[index * 2 + 1].coverage_Amount,
            answer: "",
            coverageId: action.payload[index * 2 + 1].coverage_Code,
            color: "#FFF",
          },
        ],
      }));

      if (
        JSON.stringify(networks) ===
        JSON.stringify(state.NETWORKSDETAILSDATA[0])
      ) {
        state.NETWORKSDETAILSDATA[0] = state.NETWORKSDETAILSDATA[0];
      } else {
        state.NETWORKSDETAILSDATA[0] = networks;
      }
    },
  },
});

export const {
  setPrim,
  setProximity,
  setTitle,
  setAmount,
  setClicked,
  setNetworksDetailsData,
  clearPrim,
} = thirdStepSlice.actions;
export default thirdStepSlice.reducer;
