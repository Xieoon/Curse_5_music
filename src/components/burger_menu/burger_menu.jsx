import { Link } from "react-router-dom";
import * as S from "./burger_menu_style";
import React from "react";
import { useState } from "react";

function BurgerMenu() {
  const [visible, setVisible] = useState(false);
  return (
    <S.burger_menu>
      <S.logo src="./img/logo.svg" alt="logo" /> 
      <S.burger src="./img/burger.svg" onClick={()=>{setVisible(!visible)}} />
      {visible && (
        <S.menu>
          <S.menu_item>Главное</S.menu_item>
          <Link to={'/playlists/my_tracks'}><S.menu_item>Мои треки</S.menu_item></Link>
          <S.menu_item>Выйти</S.menu_item>
        </S.menu>
      )}
    </S.burger_menu>
  );
}

export default BurgerMenu;
