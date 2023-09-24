import React from "react";
import "./Home.css";
import {
  AboutParagraph,
  BodyContainaer,
  DetailsContainer,
  DetailsRightContainer,
  ImageContainer,
  Line,
  Name,
  PortofolioContainer,
  RoundContainer,
  RoundDiv,
} from "./Home.styles";
import Header from "../../component/Header/Header";

const Home: React.FC = () => {
  return (
    <PortofolioContainer>
      <Header />
      <BodyContainaer>
        <RoundContainer>
          <RoundDiv></RoundDiv>
          <ImageContainer>
            <img src="/vishnu.png" width="310" height="370" alt="" />
          </ImageContainer>
        </RoundContainer>
        <DetailsContainer>
          <Name>I'm</Name>
          <Name>Vishnu Padiga</Name>
          <Line />
          <AboutParagraph>
            A developer who have knowledge in developing web pages <br />{" "}
            including both frontend and backend alongh with unit testing,
            <br /> with more than 5 years experience
          </AboutParagraph>
        </DetailsContainer>
        <DetailsRightContainer>
          <AboutParagraph>
            Services
            <br />
            <br />
            Let's build quality products in
            <br /> programming and design with
            <br /> my services
          </AboutParagraph>
        </DetailsRightContainer>
      </BodyContainaer>
    </PortofolioContainer>
  );
};
export default Home;
