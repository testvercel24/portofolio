import styled from "styled-components";
// import { ThemePallette } from "../../store/ThemeStore";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 5rem;
  background-color: rgba(0, 0, 0, 0);
  .name-container {
    display: flex;
  }
  .smily-image {
    width: 1rem;
    height: 1rem;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.07);
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  padding-left: 2rem;
`;
export const StyledParagraph = styled.p`
  font-size: 1rem;
  color: #b4b4b4;
  cursor: pointer;
  &:hover {
    color: #ffffff;
  }
  &.active {
    color: #ffffff;
  }
  &.insctive {
    color: #b4b4b4;
  }
`;
export const MenuContainer = styled.div`
  display: flex;
`;
export const StyledMenuItem = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  color: #b4b4b4;
  &:hover {
    color: #ffffff;
  }
`;
