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
  const [totalCost, setTotalCost] = useState(50 ^ 0.125);
  const [numberOfUsers, setNumberOfUsers] = useState(50);

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
            <Col xs={1} md={3} className="pricing-table-col">
              <Row>
                <div className="spacer-x-small"></div>

                <h4>FREE</h4>
              </Row>
              <Row>
                <div className="spacer-x-small"></div>

                <h1>$0USD</h1>
              </Row>
              <Row>
                <p>Free for your whole team</p>
                <div className="spacer-x-small"></div>
              </Row>
              <Row>
                <h4>
                  For individuals or teams looking to organize any project.
                </h4>
              </Row>
              <div className="spacer"></div>

              <Row>
                <div>
                  <Button>Get Started</Button>
                </div>
              </Row>
              <div className="spacer-small"></div>
              <Row classname="row-border-top">
                <h4>INCLUDED IN FREE:</h4>
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
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>Assignee and due dates</p>
                </Col>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>iOS and Android mobile apps</p>
                </Col>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>2-factor authentication</p>
                </Col>
              </Row>
            </Col>

            {/* ---------------------------------------------------------------------------------------- */}

            <Col xs={1} md={3} className="pricing-table-col">
              <Row>
                <div className="spacer-x-small"></div>

                <h4>STANDARD</h4>
              </Row>
              <Row>
                <div className="spacer-x-small"></div>

                <h1>$5USD</h1>
              </Row>
              <Row>
                <p>Per user/month if billed annually ($6 billed monthly)</p>
                <div className="spacer-x-small"></div>
              </Row>
              <Row>
                <h4>
                  For small teams that need to manage work and scale
                  collaboration.
                </h4>
              </Row>
              <div className="spacer"></div>

              <Row>
                <div>
                  <Button>Sign up now</Button>
                </div>
              </Row>
              <div className="spacer-small"></div>
              <Row classname="row-border-top">
                <h4>EVERYTHING IN FREE, PLUS:</h4>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>Unlimited boards</p>
                </Col>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>Advanced checklists</p>
                </Col>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>Custom Fields</p>
                </Col>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>Unlimited storage (250MB/file)</p>
                </Col>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>1,000 Workspace command runs per month</p>
                </Col>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>Single board guests</p>
                </Col>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>Saved searches</p>
                </Col>
              </Row>
            </Col>

            {/* ---------------------------------------------------------------------------------------- */}

            <Col xs={1} md={3} className="pricing-table-col-special">
              <Row>
                <div className="spacer-x-small"></div>

                <h4>PREMIUM</h4>
              </Row>
              <Row>
                <div className="spacer-x-small"></div>

                <h1>$10USD</h1>
              </Row>
              <Row>
                <p>Per user/month if billed annually ($12.50 billed monthly)</p>
                <div className="spacer-x-small"></div>
              </Row>
              <Row>
                <h4>
                  For teams that need to track and visualize multiple projects
                  in several ways, including boards, timelines, calendars, etc.
                </h4>
              </Row>
              <div className="spacer"></div>

              <Row>
                <div>
                  <Button>Try for free</Button>
                </div>
              </Row>
              <div className="spacer-small"></div>
              <Row classname="row-border-top">
                <h4>EVERYTHING IN STANDARD, PLUS:</h4>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>Views: Calendar, Timeline, Table, Dashboard, and Map</p>
                </Col>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>Workspace views: Table and Calendar</p>
                </Col>
              </Row>

              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>Unlimited Workspace command runs</p>
                </Col>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>Admin and security features</p>
                </Col>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>Workspace-level templates</p>
                </Col>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>Collections</p>
                </Col>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>Observers</p>
                </Col>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>Simple data export</p>
                </Col>
              </Row>
            </Col>

            {/* ---------------------------------------------------------------------------------------- */}

            <Col xs={1} md={3} className="pricing-table-col">
              <Row>
                <div className="spacer-x-small"></div>

                <h4>ENTERPRISE</h4>
              </Row>
              <Row>
                <div className="spacer-x-small"></div>

                <h1>${totalCost}USD</h1>
              </Row>
              <Row>
                <p>
                  Per user/month - billed annually ($210.00 annual price per
                  user)
                </p>
                <div className="spacer-x-small"></div>
              </Row>
              <Row>
                <h4>
                  For organizations that need to connect work across teams with
                  more security and controls.
                </h4>
              </Row>
              <Row>
                <p>Estimated cost for {numberOfUsers} users</p>
              </Row>

              <input
                min="50"
                max="5000"
                type="range"
                value={numberOfUsers}
                onChange={(e) => {
                  setTotalCost(35 ^ e.target.value);
                  setNumberOfUsers(e.target.value);
                }}
              ></input>
              <Row>
                <div>
                  <Button>Contact Sales</Button>
                </div>
              </Row>
              <div className="spacer-small"></div>
              <Row classname="row-border-top">
                <h4>EVERYTHING IN PREMIUM, PLUS:</h4>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>Unlimited Workspaces</p>
                </Col>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>Organization-wide permissions</p>
                </Col>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>Organization-visible boards</p>
                </Col>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>Public board management</p>
                </Col>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>Multi-board guests</p>
                </Col>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>Attachment permissions</p>
                </Col>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>Power-Up administration</p>
                </Col>
              </Row>
              <Row classname="row-border-top">
                <Col xs={1} md={1}>
                  <p>✓</p>
                </Col>
                <Col xs={1} md={11}>
                  <p>Free SSO and user provisioning with Atlassian Access</p>
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
