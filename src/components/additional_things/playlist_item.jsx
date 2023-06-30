import * as S from './playlist_item_style'
import songLogoImg from '../../assets/img/song_logo.svg'
import heartImg from '../../assets/img/heart.svg'
import lightLogoImg from '../../assets/img/light_song_logo.svg'
import { useSelector,useDispatch } from "react-redux";
import { getSong } from '../../redux/reducers/musick_play_slice';

function PlaylistItem(props){
    const theme = useSelector((state) => state.themes.value);
    const dispatch = useDispatch()
    const track = useSelector((state) => state.musickStatus.track_file);

    function playTrack(trackId){
        dispatch(getSong(trackId))
        console.log(track);
    }
    return(
       <S.item onClick={()=>playTrack(props.id)}>
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