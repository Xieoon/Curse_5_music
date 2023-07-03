import * as S from "./bar_style";
import prevImg from "../../assets/img/bar_img/prev.svg";
import playImg from "../../assets/img/bar_img/play.svg";
import pauseImg from "../../assets/img/bar_img/pause.svg";
import nextImg from "../../assets/img/bar_img/next.svg";
import repeatImg from "../../assets/img/bar_img/repeat.svg";
import mixedImg from "../../assets/img/bar_img/mixed.svg";
import favImg from "../../assets/img/heart.svg";
import deleteFavoiteImg from "../../assets/img/bar_img/delete_favorite.svg";
import songAavatarImg from "../../assets/img/bar_img/song_avatar.svg";
import {
  useSetFavoriteMutation,
  useRemoveFavoriteMutation,
} from "../../redux/api/musicApi";
import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAdjacentSong } from "../../redux/reducers/songs_slice";


function Bar() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themes.value);
  const player = useRef(null);
  const currentSong = useSelector((state) => state.songs.selectedSong);
  const [activeMusic, setActiveMusic] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.2);
  const [setFavorite, {}] = useSetFavoriteMutation();
  const [removeFavorite, {}] = useRemoveFavoriteMutation();

  async function setLike() {
    console.log();
    await setFavorite(currentSong.id)
      .unwrap()
      .then((data) => console.log(data));
  }

  async function removeLike() {
    await removeFavorite(currentSong.id)
      .unwrap()
      .then((data) => console.log(data));
  }

  function clicker() {
    setActiveMusic(!activeMusic);

    if (activeMusic) {
      player.current.pause();
    } else {
      player.current.play();
      player.current.volume = volume
    }
  }
  useEffect(() => {
    console.log(player.current.currentTime);
    player.current.ontimeupdate = (e) => {
      setCurrentTime(player.current.currentTime);
    };
  }, [player]);

  function handleProgress(value) {
    player.current.currentTime = value;
    setCurrentTime(player.current.currentTime);
  }
  function handleVolume(value) {
    player.current.volume = value;
    setVolume(player.current.volume);
  }
  return (
    <S.bar>
      <S.audio ref={player} src={currentSong.track_file} controls>
        <source type="audio/mpeg" />
      </S.audio>

      <S.progresBar
        theme={theme}
        type="range"
        max={player.current ? player.current.duration : 0}
        value={currentTime}
        onChange={(e) => handleProgress(e.target.value)}
      />
      <S.сontrolInterface theme={theme}>
        <S.trackSwitcher
          src={prevImg}
          onClick={() => {
            setActiveMusic(false);
            dispatch(selectAdjacentSong("prev"));
            setCurrentTime(0);
          }}
        />
        <S.trackPlay src={activeMusic ? pauseImg : playImg} onClick={clicker} />
        <S.trackSwitcher
          src={nextImg}
          onClick={() => {
            setActiveMusic(false);
            dispatch(selectAdjacentSong("next"));
            setCurrentTime(0);
          }}
        />
        <S.trackRepeat src={repeatImg} />
        <S.trackMixer src={mixedImg} />
        <S.trackAvatar src={songAavatarImg} />
        <S.songTitle>
          <S.songName>{currentSong.name}</S.songName>
          <S.songAuthor>{currentSong.author}</S.songAuthor>
        </S.songTitle>
        <S.heartImg src={favImg} onClick={setLike} />
        <S.deleteFavorite src={deleteFavoiteImg} onClick={removeLike} />
        <S.volumeBar
          type="range"
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => handleVolume(e.target.value)}
        />
      </S.сontrolInterface>
    </S.bar>
  );
}

export default Bar;
