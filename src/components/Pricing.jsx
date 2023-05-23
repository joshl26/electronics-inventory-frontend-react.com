import React, { useState } from "react";
import LandingPage from "../features/pages/LandingPage";
import LoginHeader from "../features/pages/LoginHeader";
// import HeroImage from "../features/pages/HeroImage";
import "./Pricing.scss";
import LoginFooter from "../features/pages/LoginFooter";
import SwipeUpIcon from "../svg/SwipeUpIcon.json";
import Lottie from "lottie-react";
import CustomerGallery from "../features/pages/CustomerGallery";
import { useEffect, useCallback } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Pricing = () => {
  const [colorMode, setColorMode] = useState(
    JSON.parse(localStorage.getItem("colorMode"))
  );

  const pricingStyle =
    colorMode === "Light"
      ? "pricing-light"
      : "" || colorMode === "Dark"
      ? "pricing-dark"
      : "";

  const SwipeUpClickHandler = () => {
    window.scrollTo(0, 0);
  };

  const onChangeColorMode = (e) => {
    console.log("On Change Color Mode " + e);

    if (e === "Light") {
      localStorage.setItem("colorMode", JSON.stringify("Dark"));
      setColorMode("Dark");
    } else {
      localStorage.setItem("colorMode", JSON.stringify("Light"));
      setColorMode("Light");
    }
  };

  useEffect(() => {
    const colorMode = JSON.parse(localStorage.getItem("colorMode"));

    if (colorMode === null) {
      localStorage.setItem("colorMode", JSON.stringify("Light"));
      setColorMode("Light");
    }
  }, [colorMode, pricingStyle]);

  const content = (
    <>
      <LoginHeader
        onChangeColorMode={onChangeColorMode}
        colorMode={colorMode}
      />
      <section className={pricingStyle}>
        <div className="spacer"></div>

        <Container>
          <h1 classname="pricing-h1-text">Electronics Inventory YOUR WAY.</h1>
          <h4 classname="pricing-h4-text">
            Trusted by millions, Electronics Inventory powers teams all around
            the world. Explore which option is right for you.
          </h4>
          <div className="spacer"></div>

          <Row>
            <Col xs={1} md={4} className="pricing-table-col">
              <Row>
                <h1>Free</h1>
              </Row>
              <Row>
                <h1>$0USD</h1>
              </Row>
              <Row>
                <h1>Free for your whole team</h1>
              </Row>
              <Row>
                <h1>
                  For individuals or teams looking to organize any project.
                </h1>
              </Row>
              <Row>
                <div>
                  <Button>Get Started</Button>
                </div>
              </Row>
              <Row classname="row-border-top">
                <h3>INCLUDED IN FREE:</h3>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>Unlimited cards</p>
                </Col>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>Up to 10 boards per Workspace</p>
                </Col>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>Unlimited storage (10MB/file)</p>
                </Col>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>250 Workspace command runs per month</p>
                </Col>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>Custom backgrounds & stickers</p>
                </Col>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>Unlimited activity log</p>
                </Col>
              </Row>
            </Col>
            <Col xs={1} md={4} className="pricing-table-col">
              <Row>
                <h1>Free</h1>
              </Row>
              <Row>
                <h1>$0USD</h1>
              </Row>
              <Row>
                <h1>Free for your whole team</h1>
              </Row>
              <Row>
                <h1>
                  For individuals or teams looking to organize any project.
                </h1>
              </Row>
              <Row>
                <div>
                  <Button>Get Started</Button>
                </div>
              </Row>
              <Row classname="row-border-top">
                <h3>INCLUDED IN FREE:</h3>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>Unlimited cards</p>
                </Col>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>Up to 10 boards per Workspace</p>
                </Col>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>Unlimited storage (10MB/file)</p>
                </Col>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>250 Workspace command runs per month</p>
                </Col>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>Custom backgrounds & stickers</p>
                </Col>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>Unlimited activity log</p>
                </Col>
              </Row>
            </Col>

            <Col xs={1} md={4} className="pricing-table-col">
              <Row>
                <h1>Free</h1>
              </Row>
              <Row>
                <h1>$0USD</h1>
              </Row>
              <Row>
                <h1>Free for your whole team</h1>
              </Row>
              <Row>
                <h1>
                  For individuals or teams looking to organize any project.
                </h1>
              </Row>
              <Row>
                <div>
                  <Button>Get Started</Button>
                </div>
              </Row>
              <Row classname="row-border-top">
                <h3>INCLUDED IN FREE:</h3>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>Unlimited cards</p>
                </Col>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>Up to 10 boards per Workspace</p>
                </Col>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>Unlimited storage (10MB/file)</p>
                </Col>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>250 Workspace command runs per month</p>
                </Col>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>Custom backgrounds & stickers</p>
                </Col>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>Unlimited activity log</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <div className="spacer"></div>
        <div className="spacer"></div>
      </section>

      <LoginFooter colorMode={colorMode} />
    </>
  );

  return content;
};

export default Pricing;
