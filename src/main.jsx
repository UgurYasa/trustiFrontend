import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ReduxProvider from "./redux/providers.jsx";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/index.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <ReduxProvider>
    <App />
  </ReduxProvider>
  </BrowserRouter>
);
