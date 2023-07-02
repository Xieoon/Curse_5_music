import * as S from './playlist_item_style'
import songLogoImg from '../../assets/img/song_logo.svg'
import Like from './llike';
import lightLogoImg from '../../assets/img/light_song_logo.svg'
import { useSelector,useDispatch } from "react-redux";
import { useGetSelectTrackQuery } from '../../redux/api/musicApi';


function PlaylistItem(props){
    const theme = useSelector((state) => state.themes.value);

    const{} = useGetSelectTrackQuery()

    const dispatch = useDispatch()
    // const track = useSelector((state) => state.musickStatus.track_file);

    function playTrack(trackId){
        
    }
    return(
       <S.item onClick={()=>playTrack(props.id)}>
        <S.itemLogo src={theme.name === 'dark'?songLogoImg:lightLogoImg} alt="song_logo" />
        <S.itemNames>{props.name}</S.itemNames>
        <S.itemAuthor theme={theme}>{props.author}</S.itemAuthor>
        <S.itemAlbum>{props.album}</S.itemAlbum>
        <Like/>
        <S.itemTime>{props.time}</S.itemTime>
        </S.item>
    )
}

export default PlaylistItem