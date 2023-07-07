import * as S from "./playlist_style";
import { useParams } from "react-router-dom";
import BurgerMenu from "../burger_menu/burger_menu";
import Bar from "../bar/bar";
import { useEffect,useState } from "react";
import React from "react";
import PlaylistItem from "../additional_things/playlist_item";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Playlist() {
  const favTracks = useSelector((state)=>state.songs.favoriteSongs)
  const [songs,setSongs] = useState('')
  const [title,setTitle] = useState('')
  const content = useParams().content;
 let currentPlayList = []
let url = ''
  switch(content){
    case 'compilation_1' :url = 'https://painassasin.online/catalog/selection/1/'

    break;
    case 'compilation_2' :url = 'https://painassasin.online/catalog/selection/2/'
    break;
    case 'compilation_3' :url = 'https://painassasin.online/catalog/selection/3/'
    break;
    case 'my_tracks' : currentPlayList = [...favTracks]
    break;
    default: url = '';
  }


  useEffect(()=>{
    setSongs(currentPlayList.map(el => <PlaylistItem id={el.id} key={el.id} name={el.name} author={el.author} album={el.album} time={el.duration_in_seconds} />))
  },[])





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
    <Bar/>
    </React.Fragment>
  );
}

export default Playlist;
