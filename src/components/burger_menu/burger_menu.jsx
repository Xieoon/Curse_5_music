import { Link } from "react-router-dom";
import * as S from "./burger_menu_style";
import React from "react";
import { useState } from "react";
import logoImg from '../../assets/img/logo.svg'
import burgerImg from '../../assets/img/burger.svg'
import ThemeSwitcher from "../../context/theme_switcher";
import { useSelector } from "react-redux";

function BurgerMenu() {
  const [visible, setVisible] = useState(false);
  const theme = useSelector((state) => state.themes.value);
  return (
    <S.burger_menu theme={theme}>
      <S.logo src={logoImg} alt="logo" /> 
      <S.burger src={burgerImg} onClick={()=>{setVisible(!visible)}} />
      {visible && (
        <S.menu>
          <Link to={'/main'}><S.menu_item theme={theme}>Главное</S.menu_item></Link>
          <Link to={'/playlists/my_tracks'}><S.menu_item theme={theme}>Мои треки</S.menu_item></Link>
          <S.menu_item theme={theme} >Выйти</S.menu_item>
          <ThemeSwitcher/>
        </S.menu>
      )}
    </S.burger_menu>
  );
}

export default BurgerMenu;
