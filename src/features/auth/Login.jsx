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
  const handleContinueBtnClick = (e) => {
    console.log(username.length);

    if (username.length > 0) {
      setContinueBtn(false);
      setShowPassword(true);
      setShowSignIn(true);
      setDisabled(true);
      console.log(showPassword);
    }
  };

  const handleUsernameClick = () => {
    console.log(disabled);
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
        <Row>
          <Col></Col>
          <Col md={5} className="login-col-align-left">
            <Lottie
              className="login-icon"
              animationData={HamburgerMenu}
              loop={false}
            />
            <h1 className="login-text">Ei</h1>
          </Col>
          <Col></Col>
        </Row>

        <p ref={errRef} className={errClass} aria-live="assertive">
          {errMsg}
        </p>

        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
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

          <div className="spacer"></div>

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
      </Container>
    </div>
  );

  return content;
};
export default Login;
