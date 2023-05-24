import * as S from './bar_style';
import prevImg from '../../assets/img/bar_img/prev.svg';
import playImg from '../../assets/img/bar_img/play.svg';
import pauseImg from '../../assets/img/bar_img/pause.svg';
import nextImg from '../../assets/img/bar_img/next.svg';
import repeatImg from '../../assets/img/bar_img/repeat.svg';
import mixedImg from '../../assets/img/bar_img/mixed.svg';
import favoriteImg from '../../assets/img/bar_img/favorite.svg';
import deleteFavoiteImg from '../../assets/img/bar_img/delete_favorite.svg';
import songAavatarImg from '../../assets/img/bar_img/song_avatar.svg'
import { useState, useRef, useEffect } from 'react';

function Bar() {
  const [activeMusic, setActiveMusic] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume,setVolume] = useState(0)
  const player = useRef(null);

  function clicker() {
    setActiveMusic(!activeMusic);

    if (activeMusic) {
      player.current.pause();
    } else {
      player.current.play();
    }
  }
  useEffect(() => {
    console.log('uef');
    console.log(player.current.currentTime);
    player.current.ontimeupdate = (e) => {
   
      setCurrentTime(player.current.currentTime);
    };
  }, [player]);

  function handleProgress(value) {
    player.current.currentTime = value;
    setCurrentTime(player.current.currentTime);
  }
  function handleVolume(value){
    player.current.volume = value;
    setVolume(player.current.volume)
  }
  return (
    <S.bar>
     
      <S.audio ref={player} controls>
        <source src="./audio/Bobby_Marleni_-_Dropin.mp3" type="audio/mpeg" />
      </S.audio>

      <S.progresBar
        type="range"
        max={player.current ? player.current.duration : 0}
        value={currentTime}
        onChange={(e) => handleProgress(e.target.value)}
      />
      <S.сontrolInterface>
        <S.trackSwitcher src={prevImg} />
        <S.trackPlay src={activeMusic ? pauseImg : playImg} onClick={clicker} />
        <S.trackSwitcher src={nextImg} />
        <S.trackRepeat src={repeatImg}/>
        <S.trackMixer src={mixedImg}/>
        <S.trackAvatar src={songAavatarImg}/>
        <S.songTitle>
          <S.songName>Название</S.songName>
          <S.songAuthor>Автор</S.songAuthor>
        </S.songTitle>
        <S.trackFavorite src={favoriteImg}/>
        <S.deleteFavorite src={deleteFavoiteImg}/>
        <S.volumeBar type='range' max={1} step={0.01} value={volume} onChange={(e)=>handleVolume(e.target.value)}/>
      </S.сontrolInterface>
    </S.bar>
  );
}

export default Bar;
