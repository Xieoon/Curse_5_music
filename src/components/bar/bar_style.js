import styled from "styled-components";

export const bar = styled.div`
height:73px;
`;



export const сontrolInterface= styled.div`
width:1883.5px;
  display: flex;
  flex-direction: row;
  padding-left:36px;
  padding-top:31px;
  padding-bottom:28px;
  display:flex;
  align-items: center;
  background-color:${(props)=>props.theme.background_color};
`;
 
export const volumeBar = styled.input`
width:112px;
height:2px;
background-color:#797979;
margin-left:1270px;

`
export const audio = styled.audio`
/* display:none; */
`

export const trackSwitcher = styled.img`
width: 15px;
height: 14px;
`

export const trackPlay = styled.img`
width: 22px;
height: 20px;
padding-left:33px;
padding-right:33px;
`
export const progresBar = styled.input`
width: 1920px;
height: 5px;
background-color:${(props)=>props.theme.bar_color};
`

export const trackMixer = styled.img`
padding-right:32px;
`
export const trackRepeat= styled.img`

padding-left:38px;
padding-right:35px;
`
export const trackAvatar = styled.img`
width:51px;
height:51px;
`
export const songTitle = styled.div`
padding-right:32px;
`
export const songName = styled.div`

`
export const songAuthor = styled.div`

`
export const trackFavorite = styled.img`
padding-right:39px;
`
export const deleteFavorite = styled.img`

`
