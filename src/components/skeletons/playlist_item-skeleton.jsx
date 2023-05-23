import * as S from './playlist_item-skeleton_style'
import avatarSkeletonImg from '../../assets/img/skeletons/avatar_skeleton.svg'
import nameSkeletonImg from '../../assets/img/skeletons/name_skeleton.svg'
import authorSkeletonImg from '../../assets/img/skeletons/author_skeleton.svg'
import albumSkeletonImg from '../../assets/img/skeletons/author_skeleton.svg'

function PlaylistItemSkeleton(){
    return(
        <S.playlistItemSkeleton>
            <S.avatarSk src={avatarSkeletonImg}/>
            <S.nameSk src={nameSkeletonImg }/>
            <S.authorSk src={authorSkeletonImg}/>
            <S.albumSk src={albumSkeletonImg }/>
        </S.playlistItemSkeleton>
    )
}

export default PlaylistItemSkeleton