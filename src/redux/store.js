import { configureStore } from "@reduxjs/toolkit";
import firstStepReducer from "./firstStepSlice";
import thirdStepReducer from "./thirdStepSlice";
import secondStepReducer from "./secondStepSlice";
export default configureStore({
  reducer: {
    firstStep: firstStepReducer,
    secondStep: secondStepReducer,
    thirdStep: thirdStepReducer,
  },
});
