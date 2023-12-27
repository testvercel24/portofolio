import * as B from "./LinkBox.styles";

const LinkBox: React.FC = () => {
  return (
    <B.LinkBoxContainer className="link-box-container">
      <B.LinkInnerBox className="link-inner-box"></B.LinkInnerBox>
    </B.LinkBoxContainer>
  );
};
export default LinkBox;
