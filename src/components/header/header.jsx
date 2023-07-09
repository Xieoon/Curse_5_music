import * as S from './header_style'
import React from 'react';
import exitImg from '../../assets/img/exit.svg'
import { useSelector } from 'react-redux';

function Header() {
    const theme = useSelector(state =>state.themes.value)
    return (
        <S.header>
            <S.headBox>
            <S.input placeholder=' Поиск' type="text" theme={theme}/>
            <S.profile src={exitImg}/>
            </S.headBox>
            <S.title theme={theme}>Треки</S.title>
            
        </S.header>
    );
  }
  
  export default Header;