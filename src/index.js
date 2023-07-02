import React from "react";
import ReactDOM from "react-dom/client";
import AppMusick from "./App";
import { Provider } from "react-redux";
import {store} from './redux/store'


// ReactDOM.render(
//   <StrictMode>
//   <Provider store={store}>
//     <AppMusick />
//   </Provider>
//   </StrictMode>,
//   document.getElementById('root')
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <AppMusick />
    </Provider>
  </React.StrictMode>
);
