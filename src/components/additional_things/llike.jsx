import heartImg from '../../assets/img/heart.svg'
import * as S from './like_style'

function Like(){
    return(
        <S.itemHeart src={heartImg} alt="like" />
    )
}

export default Like