import * as S from "./playlist_style";

import BurgerMenu from "../burger_menu/burger_menu";
import Bar from "../bar/bar";
import { useEffect, useState } from "react";
import React from "react";
import PlaylistItem from "../additional_things/playlist_item";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Playlist(props) {
  const favTracks = useSelector((state) => state.songs.favoriteSongs);

  const [songs, setSongs] = useState("");

  useEffect(() => {
  
    setSongs(
      favTracks.map((el) => (
        <PlaylistItem
          id={el.id}
          key={el.id}
          name={el.name}
          author={el.author}
          album={el.album}
          time={el.duration_in_seconds}
        />
      ))
    );
  }, [favTracks]);

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
            <S.title>Мои треки</S.title>
            <S.mainContent_box>{songs}</S.mainContent_box>
          </S.mainContent>
        </S.centerContent>
      </S.playlist>
      <Bar />
    </React.Fragment>
  );
}

export default Playlist;
