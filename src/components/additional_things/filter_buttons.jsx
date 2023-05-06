import * as S from './filter_button_style'
import {useState,useEffect} from 'react'
import React from 'react'

function FilterButton(props){
const [filters,setFilters] = useState('')
    useEffect(()=>{
        fetch(`https://painassasin.online/catalog/track/all/`)
          .then((response) => response.json())
          .then((posts) => {
           console.log(posts);
          });
      },[])
   
    return(
        <S.filter>
        <S.filterButton id={props.id} onClick={props.clicker}>{props.text}</S.filterButton>
        {props.visible && <S.filterDropDown>{props.text}</S.filterDropDown>}
        </S.filter>
    )
}

export default FilterButton