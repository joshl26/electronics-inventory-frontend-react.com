import "./LoginFooter.scss";
import { SocialIcon } from "react-social-icons";
import { Container } from "react-bootstrap";

const LoginFooter = () => {
  return (
    <Container>
      <div className="social-container">
        <SocialIcon url="https://www.linkedin.com/company/90619779/" />
        <SocialIcon url="https://facebook.com/" />
        <SocialIcon url="https://github.com/" />
        <SocialIcon url="https://google.com/" />
      </div>
      <div className="spacer-footer"></div>
    </Container>
  );
};

export default LoginFooter;
