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
  const dateFilter = useSelector((state) => state.filters.dateFilter);
  const genreFilter = useSelector((state) => state.filters.genreFilter);
  const theme = useSelector((state) => state.themes.value);
  const [filters, setFilters] = useState("");
  const [activeFilterText, setActiveFilterText] = useState(false);
  const dateFilters = ["Сначала новые", "Сначала старые"];

  const filterHandler = (e) => {
    console.log(e.target.id);
    switch (props.id) {
      case "author":
        if (nameFilter.includes(e.target.id)) {
          // e.target.activeText = false
          setActiveFilterText(false);
          dispatch(removeNameFilter(e.target.id));
          console.log(e.target);
        } else {
          dispatch(setNameFilters(e.target.id));
          // e.target.activeText = true
          setActiveFilterText(false);
          console.log(e.target.activeText);
        }

        break;
      case "release_date":
        dateFilter === e.value
          ? dispatch(removeDateFilter(e.target.id))
          : dispatch(setDateFilters(e.target.id));
        break;
      case "genre":
        genreFilter === e.value
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
        setFilters(cleanFilters);
      });
  }, []);

  const filtersEl = [...filters].map((el) => (
    <S.filterText
      activeText={activeFilterText}
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
