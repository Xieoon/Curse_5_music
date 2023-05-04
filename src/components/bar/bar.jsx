import * as S from "./bar_style";


function Bar() {
  return (
    <S.bar>
        <S.trackSwitcher src='./img/bar_img/prev.svg'/>
        <S.trackPlay src = './img/bar_img/play.svg'/>
        <S.trackSwitcher src='./img/bar_img/next.svg'/>
    </S.bar>
  );
}

export default Bar;