import * as S from "./compilation_style";
import React from "react";
import BurgerMenu from "../burger_menu/burger_menu";
import Bar from "../bar/bar";
import PlaylistItem from "../additional_things/playlist_item";
import { useState, useEffect } from "react";
import { useGetCompilationsQuery } from "../../redux/api/musicApi";
import { useParams } from "react-router-dom";

function Compilation() {
  const compileId = useParams().comp_id;

  const tracks = useGetCompilationsQuery(compileId);
  const [songs, setSongs] = useState("");
  const [title, setTitle] = useState("");



  useEffect(()=>{
    if(tracks.isSuccess){
        
        setSongs(tracks.data.items.map((el) => (
            <PlaylistItem
              id={el.id}
              key={el.id}
              name={el.name}
              author={el.author}
              album={el.album}
              time={el.duration_in_seconds}
            />
          )))
          setTitle(tracks.data.name)
    }
    
  },[tracks])

  return (
    <React.Fragment>
      <S.playlist>
        <BurgerMenu />
        <S.centerContent>
          <S.heading>
            <S.searchInput /> 
            <S.profile />
          </S.heading>
          <S.mainContent>
            <S.title>{title}</S.title>
            <S.mainContent_box>{songs}</S.mainContent_box>
          </S.mainContent>
        </S.centerContent>
      </S.playlist>
      <Bar />
    </React.Fragment>
  );
}

export default Compilation;
