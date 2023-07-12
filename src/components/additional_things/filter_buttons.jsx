import * as S from "./filter_button_style";
import { useState, useEffect } from "react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setNameFilters,
  setGenreFilters,
  setDateFilters,
  removeNameFilter,
  removeDateFilter,
  removeGenreFilter,
} from "../../redux/reducers/filter_slice";

function FilterButton(props) {
  const dispatch = useDispatch();
  const filtersStatus = useSelector((state) => state.filter);
  const theme = useSelector((state) => state.themes.value);
  const [filters, setFilters] = useState("");
  const dateFilters = ["Сначала новые", "Сначала старые"];

  const filterHandler = (e) => {
    switch (props.id) {
      case "author":
        console.log(filtersStatus.nameFilter.includes(e.target.id));
        console.log(filtersStatus.nameFilter);
        console.log(e.target.id);
        filtersStatus.nameFilter.includes(e.target.id)
          ? dispatch(removeNameFilter(e.target.id))
          : dispatch(setNameFilters(e.target.id));

        break;
      case "release_date":
        filtersStatus.dateFilter === e.target.id
          ? dispatch(removeDateFilter(e.target.id))
          : dispatch(setDateFilters(e.target.id));
        break;
      case "genre":
        filtersStatus.genreFilter === e.target.id
          ? dispatch(removeGenreFilter(e.target.id))
          : dispatch(setGenreFilters(e.target.id));
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    fetch(`https://painassasin.online/catalog/track/all/`)
      .then((response) => response.json())
      .then((posts) => {
        let cleanFilters = posts
          .map((el) => el[props.id])
          .filter(
            (item, i, ar) => ar.indexOf(item) === i && item !== "-" && item
          );
        if (props.id === "release_date") {
          cleanFilters = dateFilters;
        }
        setFilters(
          cleanFilters.map((el) => (
            <S.filterText id={el} onClick={filterHandler}>
              {el}
            </S.filterText>
          ))
        );
      });
  }, []);

  return (
    <S.filter>
      <S.filterButton
        theme={theme}
        active={props.visible}
        id={props.id}
        onClick={props.clicker}
      >
        {props.text}
      </S.filterButton>
      {props.visible && (
        <S.filterDropDown>
          <S.filterContent>{filters}</S.filterContent>
        </S.filterDropDown>
      )}
    </S.filter>
  );
}

export default FilterButton;
