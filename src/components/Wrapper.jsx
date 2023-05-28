import * as S from "./Wrapper_style";
import Main from "./main/main";
import BurgerMenu from "./burger_menu/burger_menu";
import Bar from "./bar/bar";
import { useThemeContext } from "../context/theme";

function Wrapper() {
  const {theme} = useThemeContext()
  
  return (
    <S.body theme={theme}>
      <S.body_box>
        <BurgerMenu />
        <Main />
      </S.body_box>
      <Bar/>
    </S.body>
  );
}

export default Wrapper;
