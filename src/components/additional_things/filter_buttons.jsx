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
  const nameFilter = useSelector((state) => state.filters.nameFilter);
  const dateFilter = useSelector((state) => state.filters.dataFilter);
  const genreFilter = useSelector((state) => state.filters.genreFilter);
  const theme = useSelector((state) => state.themes.value);
  const [filters, setFilters] = useState("");
  const dateFilters = ["Сначала новые", "Сначала старые"];

  const filterHandler = (e) => {
    switch (props.id) {
      case "author":
        nameFilter.includes(e.target.id)
          ? dispatch(removeNameFilter(e.target.id))
          : dispatch(setNameFilters(e.target.id));
        break;
      case "release_date":
        dateFilter === e.target.id
          ? dispatch(removeDateFilter(e.target.id))
          : dispatch(setDateFilters(e.target.id));
        break;
      case "genre":
        genreFilter === e.target.id
          ? dispatch(removeGenreFilter(e.target.id))
          : dispatch(setGenreFilters(e.target.id));
        break;

      default:
        break;
    }
  };

  function isActive(el) {
    switch (props.id) {
      case "author":
        if (nameFilter.includes(el)) {
          return true;
        }
        break;
      case "release_date":
        if (dateFilter === el) {
          return true;
        }
        break;
      case "genre":
        if (genreFilter === el) {
          return true;
        }
        break;

      default:
        return false;
    }
  }

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
        setFilters(cleanFilters);
      });
  }, []);

  const filtersEl = [...filters].map((el) => (
    <S.filterText
      $activeText={isActive(el)}
      key={el}
      id={el}
      onClick={filterHandler}
    >
      {el}
    </S.filterText>
  ));

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
          <S.filterContent>{filtersEl}</S.filterContent>
        </S.filterDropDown>
      )}
    </S.filter>
  );
}

export default FilterButton;
