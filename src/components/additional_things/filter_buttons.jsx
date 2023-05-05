import * as S from './filter_button_style'
import {useState} from 'react'
import React from 'react'

function FilterButton(props){
    const [active,setActive] = useState(false)
   
    return(
        <React.Fragment>
        <S.filterButton id={props.id} onClick={props.clicker}>{props.text}</S.filterButton>
        {props.visible && <S.filterDropDown>{props.text}</S.filterDropDown>}
        </React.Fragment>
    )
}

export default FilterButton