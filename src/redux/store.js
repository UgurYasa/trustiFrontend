import { configureStore } from "@reduxjs/toolkit";
import firstStepReducer from "./firstStepSlice";
import thirdStepReducer from "./thirdStepSlice";
export default configureStore({
  reducer: {
    firstStep: firstStepReducer,
    thirdStep: thirdStepReducer,
  },
});
