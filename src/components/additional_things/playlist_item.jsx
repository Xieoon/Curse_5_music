import * as S from './playlist_item_style'
import songLogoImg from '../../assets/img/song_logo.svg'
import inactiveLike from "../../assets/img/heart.svg";
import activeLike from "../../assets/img/bar_img/active_like.svg";
import lightLogoImg from '../../assets/img/light_song_logo.svg'
import { useSelector,useDispatch } from "react-redux";
import { useGetSelectTrackQuery } from '../../redux/api/musicApi';
import { selectCurentSong } from '../../redux/reducers/songs_slice';


function PlaylistItem(props){
    const theme = useSelector((state) => state.themes.value);

    const{data} = useGetSelectTrackQuery(props.id)

    const dispatch = useDispatch()
    

    function playTrack(){
                                  
      dispatch(selectCurentSong(data))
                                
    }                       
    return(
       <S.item onClick={()=>playTrack()} theme={theme}>
        <S.itemLogo src={theme.name === 'dark'?songLogoImg:lightLogoImg} alt="song_logo" />
        <S.itemNames theme={theme}>{props.name}</S.itemNames>
        <S.itemAuthor theme={theme}>{props.author}</S.itemAuthor>
        <S.itemAlbum theme={theme}>{props.album}</S.itemAlbum>
        <S.itemHeart theme={theme} src={props.like?activeLike:inactiveLike}/>
        <S.itemTime theme={theme}>{props.time}</S.itemTime>
        </S.item>
    )
}

export default PlaylistItem