import * as S from "./sidebar_style";
import React from "react";

function Sidebar() {
  return (
    <S.sidebar>
        <S.sidebar_img src="./img/compilation_1.svg"/>
        <S.sidebar_img src="./img/compilation_2.svg"/>
        <S.sidebar_img src="./img/compilation_3.svg"/>
    </S.sidebar>
  );
}

export default Sidebar;
