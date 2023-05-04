import * as S from './playlist_item_style'

function PlaylistItem(props){
    return(
       <S.item>
        <S.itemLogo src="./img/song_logo.svg" alt="song_logo" />
        <S.itemNames>{props.name}</S.itemNames>
        <S.itemAuthor>{props.author}</S.itemAuthor>
        <S.itemAlbum>{props.album}</S.itemAlbum>
        <S.itemHeart src="./img/heart.svg" alt="like" />
        <S.itemTime>{props.time}</S.itemTime>
        </S.item>
    )
}

export default PlaylistItem