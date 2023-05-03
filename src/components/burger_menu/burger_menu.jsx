import * as S from "./burger_menu_style";
import React from "react";

function BurgerMenu() {
  return (
    <S.burger_menu>
        <img alt="logo"/>
        <button>=</button>
        <div>
            <div>Главное</div>
            <div>Мои треки</div>
            <div>Выйти</div>
        </div>
    </S.burger_menu>
  );
}

export default BurgerMenu;
