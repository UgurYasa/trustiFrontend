import { configureStore } from "@reduxjs/toolkit";
import firstStepReducer from "./firstStepSlice";

export default configureStore({
  reducer: {
    firstStep: firstStepReducer,   
  },
});