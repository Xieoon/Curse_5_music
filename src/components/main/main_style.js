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
color:${(props)=>props.theme.font_color};
`

export const main_content = styled.div`
width:1136px;
height:640px;
display:flex;
flex-direction:column;
gap:16px;
overflow-y: scroll;
&::-webkit-scrollbar { width: 0; }
`

export const main_center = styled.div`
margin-right:161px;
display:flex;
flex-direction:column;
`
export const main = styled.div`
height:1003px;
display:flex;
flex-direction:column;
padding-left:50px;
padding-right:90px;
`
export const main_box = styled.div`
display:flex;
flex-direction:row;
`

export const main_headers = styled.div`
display:grid;
grid-template-columns: 481px 321px 293px;
margin-bottom:24px;
`

export const main_title = styled.div`
color:${(props)=>props.theme.dull_font};
font-family: StratosSkyeng;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 2px;
text-transform: uppercase;
`