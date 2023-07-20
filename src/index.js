import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App";
import {RouterProvider} from 'react-router-dom'
import { route } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
        <App/>
)