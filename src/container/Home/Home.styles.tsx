import styled from "styled-components";

export const PortofolioContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #181818;
`;
export const BodyContainaer = styled.div`
  width: 100%;
  height: 87%;
  background-color: rgba(0, 0, 0, 0);
`;
export const RoundContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  z-index: -999;
`;
export const RoundDiv = styled.div`
  border-radius: 50%;
  width: 20rem;
  height: 20rem;
  background-color: #111111;
  position: relative;
  top: 3rem;
  z-index: 1;
`;
export const DetailsContainer = styled.div`
  max-width: 44rem;
  min-height: 4rem;
  background-color: rgba(0, 0, 0, 0);
  position: relative;
  z-index: 2;
  left: 7rem;
  text-align: justify;
  top: -31rem;
  color: #fff;
`;
export const NameConatiner = styled.div``;
export const Line = styled.div`
  height: 0.4rem;
  width: 12rem;
  background-color: #ffd000;
  margin: 1rem 0rem;
`;
export const Name = styled.p`
  font-size: 4rem;
  font-weight: bold;
`;
export const AboutParagraph = styled.p`
  font-size: 1rem;
  color: #afaeae;
`;
export const DetailsRightContainer = styled.div`
  max-width: 17rem;
  min-height: 4rem;
  background-color: rgba(0, 0, 0, 0);
  position: relative;
  z-index: 2;
  right: -60rem;
  text-align: justify;
  top: -46rem;
  color: #fff;
  > p {
    font-size: 1.2rem !important;
  }
`;
export const ImageContainer = styled.div`
  left: 37rem;
  position: absolute;
  z-index: 4;
  top: 6rem;
`;
export const LinksContainer = styled.div`
  position: relative;
  top: -35rem;
  left: 36rem;
`;
