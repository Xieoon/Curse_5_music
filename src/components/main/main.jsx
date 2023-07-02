import * as S from "./main_style";
import React from "react";
import Sidebar from "../sidebar/sidebar";
import Header from "../header/header";
import PlaylistItem from "../additional_things/playlist_item";
import FilterButton from "../additional_things/filter_buttons";
import PlaylistItemSkeleton from "../skeletons/playlist_item-skeleton";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetAllTracksQuery } from "../../redux/api/musicApi";

function Main() {
  const [songs, setSongs] = useState(
    Array(20).fill([<PlaylistItemSkeleton />], 0, 20)
  );
  const [filter, setFilter] = useState("");
  const theme = useSelector((state) => state.themes.value);
  const { data = [] } = useGetAllTracksQuery();
  const allSongs = data;

  useEffect(() => {
    if (allSongs.length) {
      setSongs(
        allSongs.map((el) => (
          <PlaylistItem
            key={el.id}
            id={el.id}
            name={el.name}
            author={el.author}
            album={el.album}
            time={el.duration_in_seconds}
          />
        ))
      );
    }
  }, [allSongs]);

  function clickHandler(e) {
    if (e.target.id === filter) {
      setFilter("");
    } else {
      setFilter(e.target.id);
    }
  }

  return (
    <S.main>
      <Header />
      <S.main_box>
        <S.main_center>
          <S.filters>
            <S.filterTitle theme={theme}>Искать по:</S.filterTitle>
            <FilterButton
              text={"исполнителю"}
              id={"author"}
              visible={filter === "author"}
              clicker={clickHandler}
            />
            <FilterButton
              text={"году выпуска"}
              id={"release_date"}
              visible={filter === "release_date"}
              clicker={clickHandler}
            />
            <FilterButton
              text={"жанра"}
              id={"genre"}
              visible={filter === "genre"}
              clicker={clickHandler}
            />
          </S.filters>
          <S.main_content>{songs}</S.main_content>
        </S.main_center>
        <Sidebar />
      </S.main_box>
    </S.main>
  );
}

export default Main;
