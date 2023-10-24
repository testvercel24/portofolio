import React, { useEffect, useState } from "react";
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
  const startDate = new Date(2023, 1, 18);
  const currentDate = new Date();
  const [yearsCount, setYearsCount] = useState<number>();
  const [monthsCount, setMonthsCount] = useState<number>();
  useEffect(() => {
    const monthDiff = monthsDiff(startDate, currentDate);
    monthsToYearsAndMonths(monthDiff);
  });
  const monthsDiff = (startDate: Date, endDate: Date) => {
    const yearDiff = endDate.getFullYear() - startDate.getFullYear();
    const monthDiff = endDate.getMonth() - startDate.getMonth();
    return yearDiff * 12 + monthDiff;
  };

  const monthsToYearsAndMonths = (months: number) => {
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    setYearsCount(years);
    setMonthsCount(remainingMonths);
  };
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
            including both frontend and backend along with unit testing,
            <br /> with more than {yearsCount} years {monthsCount} months
            experience
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
