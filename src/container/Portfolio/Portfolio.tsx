import Header from "../../component/Header/Header";
import { BodyContainaer, PortofolioContainer } from "../Home/Home.styles";
const Portfolio = () => {
  return (
    <PortofolioContainer>
      <Header />
      <BodyContainaer className="body-container">
        <p>Portfolio works!</p>
      </BodyContainaer>
    </PortofolioContainer>
  );
};
export default Portfolio;
