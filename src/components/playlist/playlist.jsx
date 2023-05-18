import * as S from "./playlist_style";
import { useParams } from "react-router-dom";
import BurgerMenu from "../burger_menu/burger_menu";

function Playlist() {
  const content = useParams().content;
  console.log(content);
  return (
    <S.playlist>
      <BurgerMenu />
      <S.centerContent>
        <S.heading>
          <S.searchInput />
          <S.profile />
        </S.heading>
        <S.mainContent>
          <S.title>{}</S.title>
          <S.mainContent_box>{}</S.mainContent_box>
        </S.mainContent>
      </S.centerContent>
    </S.playlist>
  );
}

export default Playlist;
