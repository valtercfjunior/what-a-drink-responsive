import React from "react";
import "./index.css";
import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Lista from "./components/Lista/Lista.jsx";

import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="lista" element={<Lista />} />
    </Routes>
  </BrowserRouter>
);
