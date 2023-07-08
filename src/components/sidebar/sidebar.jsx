import * as S from "./sidebar_style";
import React from "react";
import { Link } from "react-router-dom";
import firstCompilationImg from '../../assets/img/compilation_1.svg'
import secondCompilationImg from '../../assets/img/compilation_2.svg'
import thirdCompilationImg from '../../assets/img/compilation_3.svg'

function Sidebar() {
  return (
    <S.sidebar>
       <Link to={'/compilations/1'}> <S.sidebar_img src={firstCompilationImg}/></Link>
       <Link to={'/compilations/2'}><S.sidebar_img src={secondCompilationImg}/></Link>
       <Link to={'/compilations/3'}><S.sidebar_img src={thirdCompilationImg}/></Link>
    </S.sidebar>
  );
}

export default Sidebar;
