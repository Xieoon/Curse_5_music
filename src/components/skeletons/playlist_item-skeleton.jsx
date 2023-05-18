import * as S from './playlist_item-skeleton_style'

function PlaylistItemSkeleton(){
    return(
        <S.playlistItemSkeleton>
            <S.avatarSk src='./img/skeletons/avatar_skeleton.svg'/>
            <S.nameSk src='./img/skeletons/name_skeleton.svg'/>
            <S.authorSk src='./img/skeletons/author_skeleton.svg'/>
            <S.albumSk src='./img/skeletons/album_skeleton.svg'/>
        </S.playlistItemSkeleton>
    )
}

export default PlaylistItemSkeleton