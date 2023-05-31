import "./LoginFooter.scss";
import { SocialIcon } from "react-social-icons";
import { Container, Row, Col } from "react-bootstrap";

const LoginFooter = ({ colorMode }) => {
  const LoginFooterStyle =
    colorMode === "Light" ? "login-footer-light" : "login-footer-dark";

  return (
    <div className={LoginFooterStyle}>
      <div className="spacer-footer"></div>
      <div className="social-container">
        <SocialIcon url="https://www.linkedin.com/company/90619779/" />
        <SocialIcon url="https://facebook.com/" />
        <SocialIcon url="https://github.com/" />
        <SocialIcon url="https://google.com/" />
      </div>
      <div className="spacer-footer"></div>
    </div>
  );
};

export default LoginFooter;
