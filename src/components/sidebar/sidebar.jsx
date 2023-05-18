import * as S from "./sidebar_style";
import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <S.sidebar>
       <Link to={'/playlists/compilation_1'}> <S.sidebar_img src="./img/compilation_1.svg"/></Link>
       <Link to={'/playlists/compilation_2'}><S.sidebar_img src="./img/compilation_2.svg"/></Link>
       <Link to={'/playlists/compilation_3'}><S.sidebar_img src="./img/compilation_3.svg"/></Link>
    </S.sidebar>
  );
}

export default Sidebar;
