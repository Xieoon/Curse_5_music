import * as S from "./main_style";
import React from "react";
import Sidebar from "../sidebar/sidebar";
import Header from "../header/header";
import FilterButton from "../additional_things/filter_buttons";

function Main() {
  return (
    <S.main>
      <Header/>
      <S.main_box>
        <S.main_center>
          <S.filters>
            <p>Искать по:</p>
            <FilterButton text={'исполнителю'}/>
            <FilterButton text={'году выпуска'}/>
            <FilterButton text={'жанра'}/>
            
          </S.filters>
          <S.main_content>
            <div>Тут песенки</div>
            <div>Пиу пиу</div>
            <div>Пау пау</div>
          </S.main_content>
        </S.main_center>
        <Sidebar />
      </S.main_box>
    </S.main>
  );
}

export default Main;
