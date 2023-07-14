import styled from "styled-components";

export const filterButton = styled.div`
  text-transform: lowercase;
  cursor: pointer;
  width: 144px;
  height: 39px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  font-family: StratosSkyeng;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: ${(props) => (props.active ? "#B672FF" : props.theme.font_color)};
  border-color: ${(props) =>
    props.active ? "#B672FF" : props.theme.font_color};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const filterDropDown = styled.div`
  margin-top: 50px;
  position: absolute;
  width: 248px;
  height: 305px;
  background: #313131;
  display: flex;
  flex-direction: column;
  gap: 28px;
  border-radius: 12px;
  padding: 35px;
`;

export const filter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const filterText = styled.div`
  font-family: StratosSkyeng;
  font-style: Regular;
  font-size: 20px;
  line-height: 24px;
  color: ${(props) => (props.$activeText ? "#B672FF" : "#FFFFFF")};
`;

export const filterContent = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 28px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    background-color: #4b4949;
    width: 4px;
    height: 237px;
  }
  &::-webkit-scrollbar-thumb {
    width: 4px;
    height: 65px;
    background-color: #fff;
  }
`;
