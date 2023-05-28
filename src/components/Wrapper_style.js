import styled from "styled-components";

export const body = styled.div`
width:1920px;
height:1080px;
background-color:${(props)=>props.theme.background};
`;

export const body_box = styled.div`
display: flex;
  flex-direction: row;
`