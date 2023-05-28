import * as S from './header_style'
import React from 'react';
import exitImg from '../../assets/img/exit.svg'
import { useThemeContext } from '../../context/theme';

function Header() {
    const {theme} = useThemeContext()
    return (
        <S.header>
            <S.headBox>
            <S.input type="text" theme={theme}/>
            <S.profile src={exitImg}/>
            </S.headBox>
            <S.title theme={theme}>Треки</S.title>
            
        </S.header>
    );
  }
  
  export default Header;