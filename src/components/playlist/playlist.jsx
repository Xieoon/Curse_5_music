import * as S from "./playlist_style";
import { useParams } from "react-router-dom";
import BurgerMenu from "../burger_menu/burger_menu";
import Bar from "../bar/bar";
import { useEffect,useState } from "react";
import React from "react";
import PlaylistItem from "../additional_things/playlist_item";

function Playlist() {
  const [songs,setSongs] = useState('')
  const [title,setTitle] = useState('')
  const content = useParams().content;
let url = ''
  switch(content){
    case 'compilation_1' :url = 'https://painassasin.online/catalog/selection/1/'

    break;
    case 'compilation_2' :url = 'https://painassasin.online/catalog/selection/2/'
    break;
    case 'compilation_3' :url = 'https://painassasin.online/catalog/selection/3/'
    break;
    case 'my_tracks' : url = 'https://painassasin.online/catalog/track/favourite/all/'
    break;
    default: url = '';
  }

  useEffect(()=>{
    fetch(url)
      .then((response) => response.json())
      .then((posts) => {
        console.log(posts);
        setTitle(posts.name)
        setSongs(posts.items.map(el => <PlaylistItem key={el.id} name={el.name} author={el.author} album={el.album} time={el.duration_in_seconds
        } />))
       
      });
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