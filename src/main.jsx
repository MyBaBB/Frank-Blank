import React from "react";
import ReactDOM from "react-dom/client";

import "../index.css";
import Cube from "./Components/CubeFolder/Cube.jsx";
// import AquariumDataTip from "./AquariumFolder/AquariumDataTip.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

      <Cube />

  </React.StrictMode>,
);
