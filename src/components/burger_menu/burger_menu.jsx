import { Link, useNavigate } from "react-router-dom";
import * as S from "./burger_menu_style";
import React from "react";
import { useState } from "react";
import logoImg from "../../assets/img/logo.svg";
import lightThemeLogo from "../../assets/img/themes/light_theme-logo.svg";
import lightThemeBurger from "../../assets/img/themes/light_theme-burger.svg";
import burgerImg from "../../assets/img/burger.svg";
import ThemeSwitcher from "../../themes/theme_switcher";
import { useSelector, useDispatch } from "react-redux";
import { findFavoriteSongs } from "../../redux/reducers/songs_slice";

function BurgerMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const theme = useSelector((state) => state.themes.value);
  const tracks = useSelector((state) => state.songs.allCurentSongs);
  const userId = useSelector((state) => state.users.id);
  const getMytracks = () => {
    dispatch(
      findFavoriteSongs(
        tracks.filter((track) => {
          if (track.stared_user.map((el) => el.id).includes(userId)) {
            return track;
          } else return false;
        })
      )
    );

    navigate("/my_tracks");
  };

  return (
    <S.burger_menu theme={theme}>
      <S.logo
        src={theme.name === "dark" ? logoImg : lightThemeLogo}
        alt="logo"
      />
      <S.burger
        src={theme.name === "dark" ? burgerImg : lightThemeBurger}
        onClick={() => {
          setVisible(!visible);
        }}
      />
      {visible && (
        <S.menu>
          <Link to={"/main"}>
            <S.menu_item theme={theme}>Главное</S.menu_item>
          </Link>
          <S.menu_item onClick={getMytracks} theme={theme}>
            Мои треки
          </S.menu_item>
          <S.menu_item theme={theme}>Выйти</S.menu_item>
          <ThemeSwitcher />
        </S.menu>
      )}
    </S.burger_menu>
  );
}

export default BurgerMenu;
