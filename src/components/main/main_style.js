import styled from "styled-components";

export const filters= styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    gap:10px;
    padding-bottom:50px;
`
export const filterTitle = styled.div`
font-family: 'StratosSkyeng';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 18px;
color:${(props)=>props.theme.color};
`

export const main_content = styled.div`
width:1136px;
height:673px;
overflow-y: scroll;
&::-webkit-scrollbar { width: 0; }
`

export const main_center = styled.div`
display:flex;
flex-direction:column;
`
export const main = styled.div`
display:flex;
flex-direction:column;
`
export const main_box = styled.div`
display:flex;
flex-direction:row;
`