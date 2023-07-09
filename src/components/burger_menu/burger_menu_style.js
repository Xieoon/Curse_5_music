import styled from "styled-components";

export const burger_menu = styled.div`
  width: 244px;
  height: 1003px;
  display: flex;
  flex-direction: column;
  padding-left:36px;
  background-color:${(props)=>props.theme.burger_background};
`;

export const logo = styled.img`
  width: 113px;
  height: 17px;
  padding-top:36px;
  padding-bottom:46px;
`;

export const burger = styled.img`
  width: 20px;
  height: 10px;
  padding-bottom:36px;
`;

export const menu_item = styled.div`
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.001em;
  font-feature-settings: "pnum" on, "lnum" on;
  color:${(props)=>props.theme.font_color};
`;

export const menu = styled.div`
  display: flex;
  flex-direction: column;
  gap:26px;
`;
