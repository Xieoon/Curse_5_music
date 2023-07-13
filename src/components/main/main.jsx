import * as S from "./main_style";
import React from "react";
import Sidebar from "..//sidebar/sidebar";
import Header from "../header/header";
import PlaylistItem from "../additional_things/playlist_item";
import FilterButton from "../additional_things/filter_buttons";
import PlaylistItemSkeleton from "../skeletons/playlist_item-skeleton";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllTracksQuery } from "../../redux/api/musicApi";
import { getAllSongs } from "../../redux/reducers/songs_slice";

function Main() {
  const [songs, setSongs] = useState(
    Array(20).fill([<PlaylistItemSkeleton />], 0, 20)
  );
  const [filter, setFilter] = useState("");
  const nameFilters = useSelector((state) => state.filters.nameFilter);
  const dataFilter = useSelector((state) => state.filters.dataFilter);
  const genreFilter = useSelector((state) => state.filters.genreFilter);
  const userId = useSelector((state) => state.users.id);
  const theme = useSelector((state) => state.themes.value);
  const dispatch = useDispatch();
  const { data = [] } = useGetAllTracksQuery();
  const allSongs = data;

  useEffect(() => {
    let allFilteredSongs = [];
    if (allSongs.length) {
      dispatch(getAllSongs(allSongs));

      allFilteredSongs = allSongs
        .filter((el) => {
          // console.log(el);

          return (
            (!nameFilters.length || nameFilters.includes(el.author)) &&
            (!genreFilter.length || genreFilter.includes(el.genre))
          );
        })
        .sort(({ release_date: adate }, { release_date: bdate }) => {
          console.log(adate);
          const current = new Date(adate).valueOf();
          const next = new Date(bdate).valueOf();
        console.log(dataFilter);
          if (dataFilter === "Сначала новые") {
            console.log("Новый");
            return next - current;
          }
          if (dataFilter === "Сначала старые") {
            console.log("Старые");
            return current - next;
          } else {
            return 0;
          }
        });
      console.log(allFilteredSongs);
      songsPlacer(allFilteredSongs);
    }
  }, [allSongs, userId, dispatch, nameFilters, genreFilter,dataFilter]);

  function clickHandler(e) {
    if (e.target.id === filter) {
      setFilter("");
    } else {
      setFilter(e.target.id);
    }
  }

  function songsPlacer(arr) {
    setSongs(
      arr.map((el) => (
        <PlaylistItem
          key={el.id}
          id={el.id}
          name={el.name}
          author={el.author}
          album={el.album}
          time={el.duration_in_seconds}
          like={el.stared_user.map((element) => element.id).includes(userId)}
        />
      ))
    );
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
          <S.main_headers>
            <S.main_title theme={theme}>Трек</S.main_title>
            <S.main_title theme={theme}>Исполнитель</S.main_title>
            <S.main_title theme={theme}>Альбом</S.main_title>
          </S.main_headers>
          <S.main_content>{songs}</S.main_content>
        </S.main_center>
        <Sidebar />
      </S.main_box>
    </S.main>
  );
}

export default Main;
