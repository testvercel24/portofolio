import Header from "../../component/Header/Header";
import { BodyContainaer, PortofolioContainer } from "../Home/Home.styles";

const About: React.FC = () => {
  return (
    <PortofolioContainer>
      <Header />
      <BodyContainaer className="body-container">
        <p>About works!</p>
      </BodyContainaer>
    </PortofolioContainer>
  );
};
export default About;
