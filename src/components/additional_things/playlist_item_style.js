import styled from "styled-components";

export const item = styled.div`
display:flex;
flex-direction:row;
align-items:center;
`
export const itemLogo = styled.img`
width: 51px;
height: 51px;
padding-right:17px;
`

export const itemNames = styled.div`
width:413px;
font-family: 'StratosSkyeng';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 18px;
color:${(props)=>props.theme.font_color};
display:flex;


`
export const itemAuthor = styled.div`
width:321px;
font-family: 'StratosSkyeng';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 18px;
color:${(props)=>props.theme.font_color};

`

export const itemAlbum = styled.div`
width:245px;
font-family: 'StratosSkyeng';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 18px;
color:${(props)=>props.theme.dull_font};

`

export const itemTime = styled.div`
font-family: 'StratosSkyeng';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 18px;
color:${(props)=>props.theme.dull_font};
`


export const itemHeart = styled.img`
width: 14px;
height: 12px;
margin-right:16.6px;
color:${(props)=>props.theme.dull_font}
`