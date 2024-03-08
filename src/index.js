import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MyRoutes from "./Routes";

const root = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(<MyRoutes />);
