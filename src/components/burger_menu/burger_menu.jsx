import { Link } from "react-router-dom";
import * as S from "./burger_menu_style";
import React from "react";
import { useState } from "react";
import logoImg from '../../assets/img/logo.svg'
import burgerImg from '../../assets/img/burger.svg'

function BurgerMenu() {
  const [visible, setVisible] = useState(false);
  return (
    <S.burger_menu>
      <S.logo src={logoImg} alt="logo" /> 
      <S.burger src={burgerImg} onClick={()=>{setVisible(!visible)}} />
      {visible && (
        <S.menu>
          <Link to={'/main'}><S.menu_item>Главное</S.menu_item></Link>
          <Link to={'/playlists/my_tracks'}><S.menu_item>Мои треки</S.menu_item></Link>
          <S.menu_item>Выйти</S.menu_item>
        </S.menu>
      )}
    </S.burger_menu>
  );
}

export default BurgerMenu;
