import * as S from "./Wrapper_style";
import { useSelector } from "react-redux";
import Main from "./main/main";
import BurgerMenu from "./burger_menu/burger_menu";
import Bar from "./bar/bar";

function Wrapper() {
  const theme = useSelector(state => state.themes.value)
  
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
