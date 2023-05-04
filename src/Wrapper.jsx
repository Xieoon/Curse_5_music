import * as S from "./Wrapper_style";
import Main from "./components/main/main";
import BurgerMenu from "./components/burger_menu/burger_menu";
import Bar from "./components/bar/bar";

function Wrapper() {
  return (
    <S.body>
      <S.body_box>
        <BurgerMenu />
        <Main />
      </S.body_box>
      <Bar/>
    </S.body>
  );
}

export default Wrapper;
