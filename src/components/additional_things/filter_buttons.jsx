import * as S from './filter_button_style'
import {useState,useEffect} from 'react'
import React from 'react'
import { useSelector } from "react-redux";

function FilterButton(props){
const theme = useSelector((state) => state.themes.value);
const [filters,setFilters] = useState('')
    useEffect(()=>{
        fetch(`https://painassasin.online/catalog/track/all/`)
          .then((response) => response.json())
          .then((posts) => {
            let cleanFilters = posts.map(el =>el[props.id]).filter((item, i, ar) => ar.indexOf(item) === i && item !== '-' && item);
           setFilters(cleanFilters.map(el =><S.filterText>{el}</S.filterText>));
          });
      },[])
   
    return(
        <S.filter>
        <S.filterButton theme={theme} active={props.visible} id={props.id} onClick={props.clicker}>{props.text}</S.filterButton>
        {props.visible && <S.filterDropDown><S.filterContent>{filters}</S.filterContent></S.filterDropDown>}
        </S.filter>
    )
}

export default FilterButton