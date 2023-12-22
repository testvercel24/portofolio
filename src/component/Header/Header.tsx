import React, { useEffect, useState } from "react";
import "./Header.css";
import {
  HeaderContainer,
  IconContainer,
  MenuContainer,
  StyledMenuItem,
  StyledParagraph,
} from "./Header.styles";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
const Header: React.FC = () => {
  const [isHomeActive, setIsHomeActive] = useState<boolean>(false);
  const [isPortfolioActive, setIsPortfolioActive] = useState<boolean>(false);
  const [isAboutActive, setIsAboutActive] = useState<boolean>(false);
  const [isItemClicked, setIsItemClicked] = useState<boolean>(false);
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
          <StyledParagraph>Menu</StyledParagraph>
        </StyledMenuItem>
      </MenuContainer>
    </HeaderContainer>
  );
};
export default Header;
