import * as S from "./main_style";
import React from "react";
import Sidebar from "../sidebar/sidebar";
import Header from "../header/header";
import PlaylistItem from "../additional_things/playlist_item";
import FilterButton from "../additional_things/filter_buttons";
import { useState,useEffect } from "react";

function Main() {
  const [songs,setSongs] = useState('')
  const [filter,setFilter] = useState('')

  useEffect(()=>{
    fetch(`https://painassasin.online/catalog/track/all/`)
      .then((response) => response.json())
      .then((posts) => {
        setSongs(posts.map(el => <PlaylistItem name={el.name} author={el.author} album={el.album} time={el.duration_in_seconds
        } />))
      });
  },[])

  function clickHandler(e){
    if(e.target.id === filter){
      setFilter('')
    }
    else{
      setFilter(e.target.id)
    }
   
  }

  return (
    <S.main>
      <Header/>
      <S.main_box>
        <S.main_center>
          <S.filters>
            <S.filterTitle>Искать по:</S.filterTitle>
            <FilterButton text={'исполнителю'} id={'author'} visible = {filter === 'author'} clicker ={clickHandler}/>
            <FilterButton text={'году выпуска'} id={'date'} visible = {filter === 'date'} clicker ={clickHandler}/>
            <FilterButton text={'жанра'} id={'genre'} visible = {filter === 'genre'} clicker ={clickHandler}/>
          </S.filters>
          <S.main_content>
            {songs}
          </S.main_content>
        </S.main_center>
        <Sidebar />
      </S.main_box>
    </S.main>
  );
}

export default Main;
