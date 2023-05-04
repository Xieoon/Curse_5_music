import * as S from './header_style'
import React from 'react';

function Header() {
    return (
        <S.header>
            <S.headBox>
            <S.input type="text" />
            <S.profile src='./img/exit.svg'/>
            </S.headBox>
            <S.title>Треки</S.title>
            
        </S.header>
    );
  }
  
  export default Header;