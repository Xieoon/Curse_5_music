import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes/Routes";
import GlobalStyleS from './App_styles'

function AppMusick() {
  return (
    <React.StrictMode>
        <BrowserRouter>
        <GlobalStyleS/>
          <AppRoutes />
        </BrowserRouter>   
    </React.StrictMode>
  );
}

export default AppMusick;
