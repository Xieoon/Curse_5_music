import * as S from "./bar_style";
import prevImg from "../../assets/img/bar_img/prev.svg";
import playImg from "../../assets/img/bar_img/play.svg";
import pauseImg from "../../assets/img/bar_img/pause.svg";
import nextImg from "../../assets/img/bar_img/next.svg";
import { useState, useRef, useEffect } from "react";

function Bar() {
  const [activeMusic, setActiveMusic] = useState(false);
  const [progress, setProgress] = useState(0);
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
    player.current.ontimeupdate = (e) => {
      setProgress((e.target.currentTime / e.target.duration) * 1000);
    };
  }, [progress,player]);

  function handleProgress(e){
    setProgress(e.target.value);
    player.current.currentTime =
      (e.target.value / 1000) * player.current.duration;
  }
  return (
    <S.bar>
      {progress}
      <audio ref={player} controls>
        <source src="./audio/Bobby_Marleni_-_Dropin.mp3" type="audio/mpeg" />
      </audio>

      <S.progresBar
        type="range"
        max={1000}
        value={progress}
        onChange={handleProgress}
      />
      <S.сontrolInterface>
        <S.trackSwitcher src={prevImg} />
        <S.trackPlay src={activeMusic ? pauseImg : playImg} onClick={clicker} />
        <S.trackSwitcher src={nextImg} />
      </S.сontrolInterface>
    </S.bar>
  );
}

export default Bar;
