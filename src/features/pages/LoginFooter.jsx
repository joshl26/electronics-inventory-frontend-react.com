import "./LoginFooter.scss";
import { SocialIcon } from "react-social-icons";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import HamburgerMenu from "../../svg/HamburgerMenu.json";
import { useState, useEffect } from "react";

const LoginFooter = ({ colorMode }) => {
  const [language, setLanguage] = useState();

  useEffect(() => {
    const language = JSON.parse(localStorage.getItem("language"));

    if (language === null) {
      localStorage.setItem("language", JSON.stringify("en"));
      setLanguage("en");
    } else {
      setLanguage(language);
    }
  }, [colorMode, setLanguage]);

  const onLanguageChangeHandler = (e) => {
    let languageChange = e.target.value;
    setLanguage(languageChange);
    localStorage.setItem("language", JSON.stringify(languageChange));
  };

  const LoginFooterStyle =
    colorMode === "Light" ? "login-footer-light" : "login-footer-dark";

  const footerButtonStyle =
    colorMode === "Light"
      ? "footer-button-light align-left"
      : "footer-button-dark align-left";

  const sectionBreakStyle =
    colorMode === "Light" ? "section-break-light" : "section-break-dark";

  return (
    <div className={LoginFooterStyle}>
      <div className="spacer-x-small"></div>
      <div className="social-container">
        <Container>
          <Row className="login-footer-button-row">
            <Col xs={12} sm={12} md={2} lg={2}>
              <Row className="footer-row">
                <Col className="footer-col">
                  <a href="/">
                    <Lottie
                      className="footer-icon"
                      animationData={HamburgerMenu}
                      loop={false}
                    />
                  </a>
                </Col>
                <Col>
                  <h1 className="footer-icon-text">Ei</h1>
                </Col>
              </Row>
            </Col>
            <Col xs={12} sm={12} md={2} lg={2}>
              <Button href="" className={footerButtonStyle}>
                <Row>
                  <h4 className="footer-h4-text">About</h4>
                </Row>
                <Row>
                  <p className="footer-p-text">What's behind the boards.</p>
                </Row>
              </Button>
            </Col>
            <Col xs={12} sm={12} md={2} lg={2}>
              <Button className={footerButtonStyle} href="/jobs">
                <Row>
                  <h4 className="footer-h4-text">Jobs</h4>
                </Row>
                <Row>
                  <p className="footer-p-text">
                    Learn about open roles on the Ei team.
                  </p>
                </Row>
              </Button>
            </Col>
            <Col xs={12} sm={12} md={2} lg={2}>
              <Button className={footerButtonStyle} href="/Apps">
                <Row>
                  <h4 className="footer-h4-text">Apps</h4>
                </Row>
                <Row>
                  <p className="footer-p-text">
                    Download the Ei app for your Desktop or Mobile devices.
                  </p>
                </Row>
              </Button>
            </Col>
            <Col xs={12} sm={12} md={2} lg={2}>
              <Button className={footerButtonStyle} href="/contact">
                <Row>
                  <h4 className="footer-h4-text">Contact Us</h4>
                </Row>
                <Row>
                  <p className="footer-p-text">What's behind the boards.</p>
                </Row>
              </Button>
            </Col>
          </Row>
          <div className={sectionBreakStyle} />
          <Row className="footer-social-row">
            <Col xs={12} md={1}>
              <h4 className="footer-h4-text">Language</h4>
            </Col>
            <Col xs={12} md={2}>
              <form className="footer-p-text">
                <select
                  name="language"
                  aria-label="Select a language"
                  data-testid="language-select"
                  onChange={(e) => onLanguageChangeHandler(e)}
                  value={language}
                >
                  <option value="en" data-uuid="en_language">
                    English
                  </option>
                  <option value="cs" data-uuid="cs_language">
                    Čeština
                  </option>
                  <option value="de" data-uuid="de_language">
                    Deutsch
                  </option>
                  <option value="es" data-uuid="es_language">
                    Español
                  </option>
                  <option value="fr" data-uuid="fr_language">
                    Français
                  </option>
                  <option value="it" data-uuid="it_language">
                    Italiano
                  </option>
                  <option value="hu" data-uuid="hu_language">
                    Magyar
                  </option>
                  <option value="nl" data-uuid="nl_language">
                    Nederlands
                  </option>
                  <option value="nb" data-uuid="nb_language">
                    Norsk (bokmål)
                  </option>
                  <option value="pl" data-uuid="pl_language">
                    Polski
                  </option>
                  <option value="pt-BR" data-uuid="pt-BR_language">
                    Português (Brasil)
                  </option>
                  <option value="fi" data-uuid="fi_language">
                    Suomi
                  </option>
                  <option value="sv" data-uuid="sv_language">
                    Svenska
                  </option>
                  <option value="vi" data-uuid="vi_language">
                    Tiếng Việt
                  </option>
                  <option value="tr" data-uuid="tr_language">
                    Türkçe
                  </option>
                  <option value="ru" data-uuid="ru_language">
                    Русский
                  </option>
                  <option value="uk" data-uuid="uk_language">
                    Українська
                  </option>
                  <option value="th" data-uuid="th_language">
                    ภาษาไทย
                  </option>
                  <option value="zh-Hans" data-uuid="zh-Hans_language">
                    中文 (简体)
                  </option>
                  <option value="zh-Hant" data-uuid="zh-Hant_language">
                    中文 (繁體)
                  </option>
                  <option value="ja" data-uuid="ja_language">
                    日本語
                  </option>
                </select>
              </form>
            </Col>
            <Col xs={12} md={1}>
              <a href="">
                <p className="footer-p-text">Privacy Policy</p>
              </a>
            </Col>
            <Col xs={12} md={1}>
              <a href="">
                <p className="footer-p-text">Terms</p>
              </a>
            </Col>
            <Col xs={12} md={1}>
              <a href="">
                <p className="footer-p-text-light">Cookie Settings</p>
              </a>
            </Col>
            <Col xs={12} md={2}>
              <p className="footer-p-text">
                Copyright © 2023 BlackRock Design Haus
              </p>
            </Col>
            <Col className="col-auto-width" xs={12} sm={6} md={1}>
              <SocialIcon
                className="social-icon"
                url="https://www.linkedin.com/company/90619779/"
              />
            </Col>
            <Col className="col-auto-width" xs={6} sm={6} md={1}>
              <SocialIcon className="social-icon" url="https://facebook.com/" />
            </Col>
            <Col className="col-auto-width" xs={6} sm={6} md={1}>
              <SocialIcon className="social-icon" url="https://github.com/" />
            </Col>
            <Col className="col-auto-width" xs={6} sm={6} md={1}>
              <SocialIcon className="social-icon" url="https://google.com/" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default LoginFooter;
