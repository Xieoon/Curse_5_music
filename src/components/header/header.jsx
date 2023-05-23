import * as S from './header_style'
import React from 'react';
import exitImg from '../../assets/img/exit.svg'

function Header() {
    return (
        <S.header>
            <S.headBox>
            <S.input type="text" />
            <S.profile src={exitImg}/>
            </S.headBox>
            <S.title>Треки</S.title>
            
        </S.header>
    );
  }
  
  export default Header;