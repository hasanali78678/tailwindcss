import React from "react";
import { createRoot } from "react-dom/client"; // Adjusted import
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
