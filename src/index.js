import React from "react";
// import ReactDOM from "react-dom";
import App from "./App";
import { createRoot } from "react-dom/client";
import { AuthContextProvider } from "./Components/context/AuthContext";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
  </BrowserRouter>
);
