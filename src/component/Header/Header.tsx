import React from "react";
import "./Header.css";
import {
  HeaderContainer,
  IconContainer,
  MenuContainer,
  StyledMenuItem,
  StyledParagraph,
} from "./Header.styles";
const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div className="name-container">
        <IconContainer>
          <div>
            <img className="smily-image" src="/smily.png" alt="icon" />
          </div>
          <StyledParagraph>Vishnu Padiga's</StyledParagraph>
        </IconContainer>
      </div>
      <MenuContainer>
        <StyledMenuItem>
          <StyledParagraph>Home</StyledParagraph>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledParagraph>Portfolio</StyledParagraph>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledParagraph>About</StyledParagraph>
        </StyledMenuItem>
      </MenuContainer>
      <MenuContainer>
        <StyledMenuItem>
          <img className="smily-image" src="/globe.png" alt="icon" />
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledParagraph>ln</StyledParagraph>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledParagraph>Menu</StyledParagraph>
        </StyledMenuItem>
      </MenuContainer>
    </HeaderContainer>
  );
};
export default Header;
