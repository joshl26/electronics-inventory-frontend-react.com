import { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setCredentials } from "./authSlice";
import { useLoginMutation } from "./authApiSlice";

import usePersist from "../../hooks/usePersist";

import Lottie from "lottie-react";
import HamburgerMenu from "../../svg/HamburgerMenu.json";

import "./Login.scss";
import { Col, Container, Row } from "react-bootstrap";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [persist, setPersist] = usePersist();
  const [continueBtn, setContinueBtn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const [colorMode, setColorMode] = useState(
    JSON.parse(localStorage.getItem("colorMode"))
  );

  const loginContainerStyle =
    colorMode === "Light"
      ? "login-container-inner-light"
      : "login-container-inner-dark";

  const sectionBreakStyle =
    colorMode === "Light" ? "section-break-light" : "section-break-dark";

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { accessToken } = await login({ username, password }).unwrap();
      dispatch(setCredentials({ accessToken }));
      setUsername("");
      setPassword("");
      navigate("/dash");
    } catch (err) {
      if (!err.status) {
        setErrMsg("No Server Response");
      } else if (err.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg(err.data?.message);
      }
      errRef.current.focus();
    }
  };

  const handleUserInput = (e) => setUsername(e.target.value);
  const handlePwdInput = (e) => setPassword(e.target.value);
  const handleToggle = () => setPersist((prev) => !prev);
  const handleContinueBtnClick = () => {
    if (username.length > 0) {
      setContinueBtn(false);
      setShowPassword(true);
      setShowSignIn(true);
      setDisabled(true);
      console.log(showPassword);
    }
  };

  const handleUsernameClick = () => {
    if (disabled === true) {
      setDisabled(false);
      setShowPassword(false);
      setContinueBtn(true);
      setShowSignIn(false);
    }
  };

  const errClass = errMsg ? "errmsg" : "offscreen";

  const loginStyle = colorMode === "Light" ? "login-light" : "login-dark";

  if (isLoading) return <p>Loading...</p>;

  const content = (
    <div className={loginStyle}>
      <Container>
        <div className="spacer-extra=small"></div>
        <Row>
          <Col></Col>
          <Col md={2} className="login-col-align-left">
            <Link to="/">
              <Lottie
                className="login-icon"
                animationData={HamburgerMenu}
                loop={false}
              />
            </Link>

            <h1 className="login-text">Ei</h1>
          </Col>
          <Col></Col>
        </Row>
        <div className={loginContainerStyle}>
          <p ref={errRef} className={errClass} aria-live="assertive">
            {errMsg}
          </p>
          <form className="form" onSubmit={handleSubmit}>
            {/* <label htmlFor="username">Username:</label> */}
            <h4 className="text-center login-header">Log in to Ei</h4>

            <div onClick={handleUsernameClick}>
              <input
                className="form__input"
                type="text"
                id="username"
                ref={userRef}
                value={username}
                onChange={handleUserInput}
                autoComplete="off"
                required
                placeholder="Enter Username"
                disabled={disabled}
              />
            </div>

            {showPassword > 0 ? (
              <>
                <label htmlFor="password">Password:</label>
                <input
                  className="form__input"
                  type="password"
                  id="password"
                  onChange={handlePwdInput}
                  value={password}
                  required
                />
              </>
            ) : (
              ""
            )}

            {continueBtn ? (
              <button
                type="button"
                onClick={handleContinueBtnClick}
                className="form__submit-button"
              >
                Continue
              </button>
            ) : (
              ""
            )}

            <div className="spacer-tiny"></div>

            {showSignIn ? (
              <>
                <button className="form__submit-button">Sign In</button>

                <label htmlFor="persist" className="form__persist">
                  <input
                    type="checkbox"
                    className="form__checkbox"
                    id="persist"
                    onChange={handleToggle}
                    checked={persist}
                  />
                  Trust This Device
                </label>
              </>
            ) : (
              ""
            )}
          </form>
          <div className="spacer-extra-small"></div>
          <form className="form">
            <Row>
              <p className="text-center light">OR</p>
            </Row>
            <Row>
              <button
                type="button"
                onClick={handleContinueBtnClick}
                className="form__submit-button"
              >
                Continue with Google
                <img
                  className="login-button-icon"
                  alt="Google Login"
                  src="https://res.cloudinary.com/dv6keahg3/image/upload/v1689541688/ElectronicsInventory/frontend_ui_images/Google_color_edzwj2.svg"
                />
              </button>
            </Row>
            <Row>
              <button
                type="button"
                onClick={handleContinueBtnClick}
                className="form__submit-button"
              >
                Continue with Microsoft
                <img
                  alt="Microsoft Login"
                  className="login-button-icon"
                  src="https://res.cloudinary.com/dv6keahg3/image/upload/v1689541690/ElectronicsInventory/frontend_ui_images/Microsoft_color_duzdcl.svg"
                />
              </button>
            </Row>
            <Row>
              <button
                type="button"
                onClick={handleContinueBtnClick}
                className="form__submit-button"
              >
                Continue with Apple
                <img
                  alt="Apple Login"
                  className="login-button-icon"
                  src="https://res.cloudinary.com/dv6keahg3/image/upload/v1689541690/ElectronicsInventory/frontend_ui_images/Apple_color_ax7zu9.svg"
                />
              </button>
            </Row>
            <Row>
              <button
                type="button"
                onClick={handleContinueBtnClick}
                className="form__submit-button"
              >
                Continue with Slack{" "}
                <img
                  alt="Slack Login"
                  className="login-button-icon"
                  src="https://res.cloudinary.com/dv6keahg3/image/upload/v1689541691/ElectronicsInventory/frontend_ui_images/Slack_color_gfgg0w.svg"
                />
              </button>
            </Row>
            <div className="spacer-extra-small"></div>
            <div className={sectionBreakStyle}></div>

            <Col>
              <Row className="text-center">
                <p>
                  <Link>Can't log in?</Link>{" "}
                  <p style={{ display: "inline", color: " white" }}> | </p>{" "}
                  <Link>Sign up for an account</Link>
                </p>
              </Row>
            </Col>
          </form>
        </div>
        <div className="spacer-extra-small"></div>
        <Col>
          <Row className="text-center">
            <p>
              <Link>Privacy Policy</Link>
              <p style={{ display: "inline", color: " white" }}> | </p>
              <Link>Terms of Service</Link>
            </p>
          </Row>
        </Col>
        <div className="spacer-extra-small"></div>

        <Col className="text-center">
          <form className="LanguageSelectFormstyles__LanguageForm-sc-5xddw4-0 eSGOHD">
            <select
              aria-label="Select a language"
              data-testid="language-select"
            >
              <option value="cs" data-uuid="cs_language">
                Čeština
              </option>
              <option value="de" data-uuid="de_language">
                Deutsch
              </option>
              <option value="en" data-uuid="en_language">
                English
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
        <div className="spacer-small"></div>
        <div className="spacer-extra-small"></div>
        <div className="spacer-extra-small"></div>
        <Col>
          <div className={sectionBreakStyle}></div>
        </Col>
        <div className="spacer-extra-small"></div>
        <div className="spacer-extra-small"></div>
        <Col>
          <h3 className="text-center">BlackRock Design Haus</h3>
        </Col>
        <div className="spacer-extra-small"></div>
        <Row>
          <Col>
            <Link>
              <p className="login-footer-links">Templates</p>
            </Link>
          </Col>
          <Col>
            <Link>
              <p>Pricing</p>
            </Link>
          </Col>
          <Col>
            <Link>
              <p>Apps</p>
            </Link>
          </Col>
          <Col>
            <Link>
              <p>Jobs</p>
            </Link>
          </Col>
          <Col>
            <Link>
              <p>Blog</p>
            </Link>
          </Col>
          <Col>
            <Link>
              <p>Developers</p>
            </Link>
          </Col>
          <Col>
            <Link>
              <p>About</p>
            </Link>
          </Col>
          <Col>
            <Link>
              <p>Help</p>
            </Link>
          </Col>
          <Col>
            <Link>
              <p>Cookie Settings</p>
            </Link>
          </Col>
        </Row>
        <div className="spacer-extra-small"></div>
      </Container>
    </div>
  );

  return content;
};
export default Login;
