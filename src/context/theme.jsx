import React,{useContext} from "react";

export const themes = {
    light:{
        color: "#000000",
        background:"#FFFFFF",
        burger_background: "#F6F5F3",
    },
    dark:{
        color: "#FFFFFF",
        background:"#181818",
        burger_background: "#1C1C1C",
    }
}

export const ThemeContext = React.createContext({
    theme:themes.dark,
    toggleTheme:()=>{},
})

export const useThemeContext=()=>{
    const theme = useContext(ThemeContext)

    if(!theme) return theme.dark

    return theme
}