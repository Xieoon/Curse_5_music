import * as S from './playlist_item_style'
import songLogoImg from '../../assets/img/song_logo.svg'
import heartImg from '../../assets/img/heart.svg'

function PlaylistItem(props){
    return(
       <S.item>
        <S.itemLogo src={songLogoImg} alt="song_logo" />
        <S.itemNames>{props.name}</S.itemNames>
        <S.itemAuthor>{props.author}</S.itemAuthor>
        <S.itemAlbum>{props.album}</S.itemAlbum>
        <S.itemHeart src={heartImg} alt="like" />
        <S.itemTime>{props.time}</S.itemTime>
        </S.item>
    )
}

export default PlaylistItem