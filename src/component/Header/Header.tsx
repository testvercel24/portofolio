import React, { useEffect, useState } from "react";
import "./Header.css";
import {
  HeaderContainer,
  IconContainer,
  MenuContainer,
  MenuMainContainer,
  StyledMenuItem,
  StyledParagraph,
} from "./Header.styles";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import Menu from "../Menu/Menu";
const Header: React.FC = () => {
  const [isHomeActive, setIsHomeActive] = useState<boolean>(false);
  const [isPortfolioActive, setIsPortfolioActive] = useState<boolean>(false);
  const [isAboutActive, setIsAboutActive] = useState<boolean>(false);
  const [isItemClicked, setIsItemClicked] = useState<boolean>(false);
  const [isMenuClicked,setIsMenuClicked]=useState<boolean>(false);
  const navigate = useNavigate();
  const loc = useLocation();
  useEffect(() => {
    if (
      window.location.pathname[1] === "h" ||
      window.location.pathname[1] === undefined
    ) {
      setIsHomeActive(true);
      setIsAboutActive(false);
      setIsPortfolioActive(false);
    } else if (window.location.pathname[1] === "a") {
      setIsHomeActive(false);
      setIsAboutActive(true);
      setIsPortfolioActive(false);
    } else if (window.location.pathname[1] === "p") {
      setIsHomeActive(false);
      setIsAboutActive(false);
      setIsPortfolioActive(true);
    }
  }, [isItemClicked]);

  const onClickPortfolio = () => {
    setIsItemClicked(!isItemClicked);
    navigate("/portfolio");
  };
  const onAboutClick = () => {
    setIsItemClicked(!isItemClicked);
    navigate("/about");
  };
  const onHomeClick = () => {
    setIsItemClicked(!isItemClicked);
    navigate("/home");
  };
  const onMenuClick=()=>{
    setIsMenuClicked(!isMenuClicked)
  }
  return (
    <HeaderContainer className="header-container">
      <div className="name-container">
        <IconContainer>
          <div>
            <img className="smily-image" src="/smily.png" alt="icon" />
          </div>
          <StyledParagraph className="styled-paragraph">Vishnu Padiga's</StyledParagraph>
        </IconContainer>
      </div>
      <MenuContainer className="menu-container">
        <StyledMenuItem className="styled-menu-item">
          <StyledParagraph
            className={isHomeActive ? "active" : "inactive"}
            onClick={onHomeClick}
          >
            Home
          </StyledParagraph>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledParagraph
            className={isPortfolioActive ? "active" : "inactive"}
            onClick={onClickPortfolio}
          >
            Portfolio
          </StyledParagraph>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledParagraph
            className={isAboutActive ? "active" : "inactive"}
            onClick={onAboutClick}
          >
            About
          </StyledParagraph>
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
          <StyledParagraph onClick={onMenuClick} className={isMenuClicked?'active':'inactive'}>Menu</StyledParagraph>
        </StyledMenuItem>
      </MenuContainer>
      <MenuMainContainer className={isMenuClicked?'menu-active':'menu-inactive'}>
        <Menu></Menu>
      </MenuMainContainer>
    </HeaderContainer>
  );
};
export default Header;
