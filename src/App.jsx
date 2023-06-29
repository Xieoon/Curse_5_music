import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes/Routes";

function AppMusick() {
  return (
    <React.StrictMode>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>   
    </React.StrictMode>
  );
}

export default AppMusick;
