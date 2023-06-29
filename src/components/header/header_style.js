import styled from "styled-components";

export const header = styled.div`
  display: flex;
  flex-direction: column;
`;
export const title = styled.div`
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 64px;
  padding-top:51px;
  padding-bottom:45px;
  color:${(props)=>props.theme.font_color};
`;

export const input = styled.input`
border:none;
width:1293px;
border-bottom:1px solid  #4E4E4E;
background-color:${(props)=>props.theme.background_color};
padding-top:52px;
`
export const profile  = styled.img`
width:40px;
height:40px;
padding-left:200px;
`

export const headBox = styled.div`
display:flex;
flex-direction:row;
`
