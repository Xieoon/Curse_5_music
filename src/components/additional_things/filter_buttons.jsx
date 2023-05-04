import * as S from './filter_button_style'

function FilterButton(props){
    return(
        <S.filterButton>{props.text}</S.filterButton>
    )
}

export default FilterButton