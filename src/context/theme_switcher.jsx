import { useThemeContext } from "./theme"
import lightTheme from '../assets/img/themes/light_theme.svg'
import darkTheme from '../assets/img/themes/dark_theme.svg'
import * as S from './theme_switcher_style'
function ThemeSwitcher(){
const {toggleTheme} = useThemeContext()
    return(
        <S.themeButton  onClick={toggleTheme} src={darkTheme} alt="themeSwithButton"/>
    )
}

export default ThemeSwitcher