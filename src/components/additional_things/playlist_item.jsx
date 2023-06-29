import * as S from './playlist_item_style'
import songLogoImg from '../../assets/img/song_logo.svg'
import heartImg from '../../assets/img/heart.svg'
import lightLogoImg from '../../assets/img/light_song_logo.svg'
import { useSelector } from "react-redux";

function PlaylistItem(props){
    const theme = useSelector((state) => state.themes.value);
    return(
       <S.item>
        <S.itemLogo src={theme.name === 'dark'?songLogoImg:lightLogoImg} alt="song_logo" />
        <S.itemNames>{props.name}</S.itemNames>
        <S.itemAuthor theme={theme}>{props.author}</S.itemAuthor>
        <S.itemAlbum>{props.album}</S.itemAlbum>
        <S.itemHeart src={heartImg} alt="like" />
        <S.itemTime>{props.time}</S.itemTime>
        </S.item>
    )
}

export default PlaylistItem