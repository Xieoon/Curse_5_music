import * as S from "./bar_style";
import prevImg from '../../assets/img/bar_img/prev.svg'
import playImg from '../../assets/img/bar_img/play.svg'
import nextImg from '../../assets/img/bar_img/next.svg'


function Bar() {
  return (
    <S.bar>
        <S.trackSwitcher src={prevImg}/>
        <S.trackPlay src = {playImg}/>
        <S.trackSwitcher src={nextImg}/>
    </S.bar>
  );
}

export default Bar;