import { createGlobalStyle } from "styled-components";

import StratosSkyeng from "./assets/img/fonts/Stratos-Regular.woff2";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

@font-face {
    font-family: 'StratosSkyeng';
    src: url(${StratosSkyeng}) format('woff2')
}
`;
