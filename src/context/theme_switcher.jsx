import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../redux/themes/theme_slice";
import lightTheme from "../assets/img/themes/light_theme.svg";
import darkTheme from "../assets/img/themes/dark_theme.svg";
import * as S from "./theme_switcher_style";

function ThemeSwitcher() {
  const theme = useSelector((state) => state.themes.value);
  const dispatch = useDispatch();

  return (
    <S.themeButton
      onClick={() => dispatch(changeTheme())}
      src={theme.name === "dark" ? darkTheme : lightTheme}
      alt="themeSwithButton"
    />
  );
}

export default ThemeSwitcher;
