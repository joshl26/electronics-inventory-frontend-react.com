import React from "react";
import "./NewSignup.scss";
import { Container, Row, Col, Button } from "react-bootstrap";

const NewSignup = ({ colorMode }) => {
  const signupSectionStlye =
    colorMode === "Light" ? "signup-section-light" : "signup-section-dark";

  const onEmailChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className={signupSectionStlye}>
      <div className="spacer"></div>
      <Container>
        <Col>
          <Row>
            <h1 className="align-center">
              Havent tried Electronics Inventory before?
            </h1>
          </Row>
          <Row>
            <h4 className="align-center">
              Signup for free and join over 2M teams worldwide who <br /> are
              using Electronics Inventory to get more done.
            </h4>
          </Row>
          <Row>
            <div className="spacer-small"></div>
          </Row>
          <Row>
            <Col xs={1} sm={2} md={4}></Col>
            <Col className="text-center" xs={1} sm={3} md={3}>
              <input
                className="email-input"
                type="email"
                placeholder="Email"
                onChange={onEmailChange}
              />
            </Col>
            <Col xs={1} sm={3} md={3}>
              <Button>Sign Up</Button>
            </Col>
            <Col xs={1} sm={3} md={2}></Col>
          </Row>
        </Col>
        <div className="spacer"></div>
      </Container>
    </div>
  );
};

export default NewSignup;
