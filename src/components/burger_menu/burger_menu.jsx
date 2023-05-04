import * as S from "./burger_menu_style";
import React from "react";

function BurgerMenu() {
  return (
    <S.burger_menu>
        <S.logo src="./img/logo.svg" alt="logo"/>
        <S.burger src='./img/burger.svg'/>
        <S.menu>
            <S.menu_item>Главное</S.menu_item>
            <S.menu_item>Мои треки</S.menu_item>
            <S.menu_item>Выйти</S.menu_item>
        </S.menu>
    </S.burger_menu>
  );
}

export default BurgerMenu;
