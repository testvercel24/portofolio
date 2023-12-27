import * as B from "./LinkBox.styles";

const LinkBox: React.FC = () => {
  const onGmailClick=()=>{
    const defaultEmail = 'padigavishnu24@gmail.com';
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(defaultEmail)}`;
    window.open(gmailLink, '_blank');
  }
  const onLinkedInClick=()=>{
    const gmailLink = `https://www.linkedin.com/in/padiga-vishnu-2b6003206/`;
    window.open(gmailLink, '_blank');
  }
  return (
    <B.LinkBoxContainer className="link-box-container">
      <B.LinkInnerBox className="link-inner-box">
        <div>
          <img className="smily-image" src="/gmail.png" alt="icon" onClick={onGmailClick}/>
        </div>
        <div>
          <img className="smily-image" src="/linkedin1.png" alt="icon" onClick={onLinkedInClick}/>
        </div>
      </B.LinkInnerBox>
    </B.LinkBoxContainer>
  );
};
export default LinkBox;
