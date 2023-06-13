import React, { useState } from "react";
import LoginHeader from "../features/pages/LoginHeader";
import "./Pricing.scss";
import LoginFooter from "../features/pages/LoginFooter";
import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import features from "../mock_data/features.json";
import { arraySearch } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faCheck } from "@fortawesome/free-solid-svg-icons";

const Pricing = () => {
  const [population, setPopulation] = useState(features);
  const [count, setCount] = useState(features.length);
  const [enterpriseCost, setEnterpriseCost] = useState(23.5);
  const [totalCost, setTotalCost] = useState(23.5);
  const [standardCost, setStandardCost] = useState(7.5);
  const [premiumCost, setPremiumCost] = useState(13.5);
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

  const headerTransitionStyle =
    colorMode === "Light"
      ? "header-transition-light"
      : "header-transition-dark";

  const footerTransitionStyle =
    colorMode === "Light"
      ? "footer-transition-light"
      : "footer-transition-dark";

  const inputStyle =
    colorMode === "Light" ? "input-users-light" : "input-users-dark";

  const onChangeColorMode = (e) => {
    // console.log("On Change Color Mode " + e);

    if (e === "Light") {
      localStorage.setItem("colorMode", JSON.stringify("Dark"));
      setColorMode("Dark");
    } else {
      localStorage.setItem("colorMode", JSON.stringify("Light"));
      setColorMode("Light");
    }
  };

  const handleOnChange = async (e) => {
    let value = e.target.value;
    if (value.length > 2) {
      let search = await arraySearch(population, value);
      setPopulation(search);
      setCount(search.length);
    } else {
      setPopulation(features);
      setCount(features.length);
    }
  };

  const handleInputChange = (e) => {
    if (e.target.value > 250) {
      setTotalCost(
        Math.round(
          (50.2 + -4.82 * Math.log(e.target.value) + Number.EPSILON) * 100
        ) / 100
      );
      setNumberOfUsers(e.target.value);
    } else {
      setTotalCost(enterpriseCost);
      setNumberOfUsers(e.target.value);
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
        <div className={headerTransitionStyle}>
          <div className="spacer"></div>
          <div className="spacer-small"></div>
          <Container>
            <h1 className="pricing-h1-text">Electronics Inventory YOUR WAY.</h1>
            <h4 className="pricing-h4-text">
              Trusted by millions, Electronics Inventory powers teams all around
              the world. Explore which option is right for you.
            </h4>
          </Container>
        </div>
        <div className="spacer"></div>

        <Container>
          <Row className="pricing-table-row">
            <Col xs={11} sm={11} md={3} className="pricing-table-col-left">
              <div className="pricing-table-top">
                <Row>
                  <div className="spacer-x-small"></div>
                  <h4 className="top-table-title">FREE</h4>
                </Row>
                <Row>
                  <div className="spacer-x-small"></div>
                  <div>
                    <h1 className="inline-text amount-text">$0</h1>
                    <div className="inline-text text-spacer" />
                    <h1 className="inline-text currency-text">CAD</h1>
                  </div>
                </Row>
                <Row>
                  <p className="pricing-p-text">Free for your whole team</p>
                  <div className="spacer-x-small"></div>
                </Row>
                <Row>
                  <h4 className="top-table-title">
                    For individuals or teams looking to organize any project.
                  </h4>
                </Row>
                <div className="spacer-small"></div>
                <Row>
                  <div>
                    <Button>Get Started</Button>
                  </div>
                </Row>
              </div>
              <div>
                <div className="spacer-small"></div>
                <Row className="row-border-top">
                  <h4 className="top-table-title">INCLUDED IN FREE:</h4>
                </Row>
                <div className="spacer-x-small"></div>

                <Row className="row-border-top align-left">
                  <Col className="col-auto-width" xs={1} sm={1} md={1} lg={1}>
                    <FontAwesomeIcon icon={faCheck} className="pricing-check" />
                  </Col>
                  <Col
                    className="col-auto-width"
                    xs={11}
                    sm={11}
                    md={11}
                    lg={11}
                  >
                    <p className="pricing-p-text">Unlimited cards</p>
                  </Col>
                </Row>
                <Row className="row-border-top">
                  <Col className="col-auto-width" xs={1} sm={1} md={1} lg={1}>
                    <FontAwesomeIcon icon={faCheck} className="pricing-check" />
                  </Col>
                  <Col
                    className="col-auto-width"
                    xs={11}
                    sm={11}
                    md={11}
                    lg={11}
                  >
                    <p className="pricing-p-text">
                      Up to 10 boards per Workspace
                    </p>
                  </Col>
                </Row>
                <Row className="row-border-top">
                  <Col className="col-auto-width" xs={1} sm={1} md={1} lg={1}>
                    <FontAwesomeIcon icon={faCheck} className="pricing-check" />
                  </Col>
                  <Col
                    className="col-auto-width"
                    xs={11}
                    sm={11}
                    md={11}
                    lg={11}
                  >
                    <p className="pricing-p-text">
                      Unlimited storage (10MB/file)
                    </p>
                  </Col>
                </Row>
                <Row className="row-border-top">
                  <Col className="col-auto-width" xs={1} sm={1} md={1} lg={1}>
                    <FontAwesomeIcon icon={faCheck} className="pricing-check" />
                  </Col>
                  <Col
                    className="col-auto-width"
                    xs={11}
                    sm={11}
                    md={11}
                    lg={11}
                  >
                    <p className="pricing-p-text">250 Workspace command runs</p>
                  </Col>
                </Row>
                <Row className="row-border-top">
                  <Col className="col-auto-width" xs={1} sm={1} md={1} lg={1}>
                    <FontAwesomeIcon icon={faCheck} className="pricing-check" />
                  </Col>
                  <Col
                    className="col-auto-width"
                    xs={11}
                    sm={11}
                    md={11}
                    lg={11}
                  >
                    <p className="pricing-p-text">
                      Custom backgrounds & stickers
                    </p>
                  </Col>
                </Row>
                <Row className="row-border-top">
                  <Col className="col-auto-width" xs={1} sm={1} md={1} lg={1}>
                    <FontAwesomeIcon icon={faCheck} className="pricing-check" />
                  </Col>
                  <Col
                    className="col-auto-width"
                    xs={11}
                    sm={11}
                    md={11}
                    lg={11}
                  >
                    <p className="pricing-p-text">Unlimited activity log</p>
                  </Col>
                </Row>
                <Row className="row-border-top">
                  <Col className="col-auto-width" xs={1} sm={1} md={1} lg={1}>
                    <FontAwesomeIcon icon={faCheck} className="pricing-check" />
                  </Col>
                  <Col
                    className="col-auto-width"
                    xs={11}
                    sm={11}
                    md={11}
                    lg={11}
                  >
                    <p className="pricing-p-text">Assignee and due dates</p>
                  </Col>
                </Row>
                <Row className="row-border-top">
                  <Col className="col-auto-width" xs={1} sm={1} md={1} lg={1}>
                    <FontAwesomeIcon icon={faCheck} className="pricing-check" />
                  </Col>
                  <Col
                    className="col-auto-width"
                    xs={11}
                    sm={11}
                    md={11}
                    lg={11}
                  >
                    <p className="pricing-p-text">
                      iOS and Android mobile apps
                    </p>
                  </Col>
                </Row>
                <Row className="row-border-top">
                  <Col className="col-auto-width" xs={1} sm={1} md={1} lg={1}>
                    <FontAwesomeIcon icon={faCheck} className="pricing-check" />
                  </Col>
                  <Col
                    className="col-auto-width"
                    xs={11}
                    sm={11}
                    md={11}
                    lg={11}
                  >
                    <p className="pricing-p-text">2-factor authentication</p>
                  </Col>
                </Row>
              </div>
            </Col>

            {/* ---------------------------------------------------------------------------------------- */}

            <Col xs={11} sm={11} md={3} className="pricing-table-col-left">
              <div className="pricing-table-top">
                <Row>
                  <div className="spacer-x-small"></div>
                  <h4 className="top-table-title">STANDARD</h4>
                </Row>
                <Row>
                  <div className="spacer-x-small"></div>
                  <div>
                    <h1 className="inline-text amount-text">${standardCost}</h1>
                    <div className="inline-text text-spacer" />
                    <h1 className="inline-text currency-text">CAD</h1>
                  </div>
                </Row>
                <Row>
                  <p className="pricing-p-text">
                    Per user/month if billed annually <br /> ($
                    {standardCost * 1.2} billed monthly)
                  </p>
                  <div className="spacer-x-small"></div>
                </Row>
                <Row>
                  <h4 className="top-table-title">
                    For small teams that need to manage work and scale
                    collaboration.
                  </h4>
                </Row>
                <div className="spacer-small"></div>
                <Row>
                  <div>
                    <Button>Sign up now</Button>
                  </div>
                </Row>
              </div>
              <div className="spacer-small"></div>
              <Row className="row-border-top">
                <h4 className="top-table-title">EVERYTHING IN FREE, PLUS:</h4>
              </Row>
              <div className="spacer-x-small"></div>

              <Row className="row-border-top">
                <Col className="col-auto-width" xs={1} sm={1} md={1} lg={1}>
                  <FontAwesomeIcon icon={faCheck} className="pricing-check" />
                </Col>
                <Col className="col-auto-width" xs={11} sm={11} md={11} lg={11}>
                  <p className="pricing-p-text">Unlimited boards</p>
                </Col>
              </Row>
              <Row className="row-border-top">
                <Col className="col-auto-width" xs={1} sm={1} md={1} lg={1}>
                  <FontAwesomeIcon icon={faCheck} className="pricing-check" />
                </Col>
                <Col className="col-auto-width" xs={11} sm={11} md={11} lg={11}>
                  <p className="pricing-p-text">Advanced checklists</p>
                </Col>
              </Row>
              <Row className="row-border-top">
                <Col className="col-auto-width" xs={1} sm={1} md={1} lg={1}>
                  <FontAwesomeIcon icon={faCheck} className="pricing-check" />
                </Col>
                <Col className="col-auto-width" xs={11} sm={11} md={11} lg={11}>
                  <p className="pricing-p-text">Custom Fields</p>
                </Col>
              </Row>
              <Row className="row-border-top">
                <Col className="col-auto-width" xs={1} sm={1} md={1} lg={1}>
                  <FontAwesomeIcon icon={faCheck} className="pricing-check" />
                </Col>
                <Col className="col-auto-width" xs={11} sm={11} md={11} lg={11}>
                  <p className="pricing-p-text">
                    Unlimited storage (250MB/file)
                  </p>
                </Col>
              </Row>
              <Row className="row-border-top">
                <Col className="col-auto-width" xs={1} sm={1} md={1} lg={1}>
                  <FontAwesomeIcon icon={faCheck} className="pricing-check" />
                </Col>
                <Col className="col-auto-width" xs={11} sm={11} md={11} lg={11}>
                  <p className="pricing-p-text">1,000 Workspace command runs</p>
                </Col>
              </Row>
              <Row className="row-border-top">
                <Col className="col-auto-width" xs={1} sm={1} md={1} lg={1}>
                  <FontAwesomeIcon icon={faCheck} className="pricing-check" />
                </Col>
                <Col className="col-auto-width" xs={11} sm={11} md={11} lg={11}>
                  <p className="pricing-p-text">Single board guests</p>
                </Col>
              </Row>
              <Row className="row-border-top">
                <Col className="col-auto-width" xs={1} sm={1} md={1} lg={1}>
                  <FontAwesomeIcon icon={faCheck} className="pricing-check" />
                </Col>
                <Col className="col-auto-width" xs={11} sm={11} md={11} lg={11}>
                  <p className="pricing-p-text">Saved searches</p>
                </Col>
              </Row>
              <Row className="row-border-top">
                <Col>
                  <Link>
                    <p className="pricing-p-text">Learn More About Standard</p>
                  </Link>
                </Col>
              </Row>
            </Col>

            {/* ---------------------------------------------------------------------------------------- */}

            <Col xs={11} sm={11} md={3} className="pricing-table-col-special">
              <div className="pricing-table-top">
                <Row>
                  <div className="spacer-x-small"></div>
                  <h4 className="top-table-title">PREMIUM</h4>
                </Row>
                <Row>
                  <div className="spacer-x-small"></div>
                  <div>
                    <h1 className="inline-text amount-text">${premiumCost}</h1>
                    <div className="inline-text text-spacer" />
                    <h1 className="inline-text currency-text">CAD</h1>
                  </div>
                </Row>
                <Row>
                  <p className="pricing-p-text">
                    Per user/month if billed annually <br />
                    ($
                    {Math.round((premiumCost * 1.25 + Number.EPSILON) * 100) /
                      100}{" "}
                    billed monthly)
                  </p>
                  <div className="spacer-x-small"></div>
                </Row>
                <Row>
                  <h4 className="top-table-title">
                    For teams that need to track and visualize multiple projects
                    in several ways, including boards, timelines, calendars,
                    etc.
                  </h4>
                </Row>
                <div className="spacer-small"></div>
                <Row>
                  <div>
                    <Button className="premium-btn" variant="danger">
                      Try for free
                    </Button>
                  </div>
                </Row>
              </div>
              <div className="spacer-small"></div>
              <Row className="row-border-top">
                <h4 className="top-table-title">
                  EVERYTHING IN STANDARD, PLUS:
                </h4>
              </Row>
              <div className="spacer-x-small"></div>

              <Row className="row-border-top">
                <Col className="col-auto-width" xs={1} sm={1} md={1} lg={1}>
                  <FontAwesomeIcon icon={faCheck} className="pricing-check" />
                </Col>
                <Col className="col-auto-width" xs={11} sm={11} md={11} lg={11}>
                  <p className="pricing-p-text">
                    Calendar, Timeline, Table, Dashboard
                  </p>
                </Col>
              </Row>
              <Row className="row-border-top">
                <Col className="col-auto-width" xs={1} sm={1} md={1} lg={1}>
                  <FontAwesomeIcon icon={faCheck} className="pricing-check" />
                </Col>
                <Col className="col-auto-width" xs={11} sm={11} md={11} lg={11}>
                  <p className="pricing-p-text">
                    Workspace: Table and Calendar
                  </p>
                </Col>
              </Row>
              <Row className="row-border-top">
                <Col className="col-auto-width" xs={1} sm={1} md={1} lg={1}>
                  <FontAwesomeIcon icon={faCheck} className="pricing-check" />
                </Col>
                <Col className="col-auto-width" xs={11} sm={11} md={11} lg={11}>
                  <p className="pricing-p-text">Unlimited Workspace commands</p>
                </Col>
              </Row>
              <Row className="row-border-top">
                <Col className="col-auto-width" xs={1} sm={1} md={1} lg={1}>
                  <FontAwesomeIcon icon={faCheck} className="pricing-check" />
                </Col>
                <Col className="col-auto-width" xs={11} sm={11} md={11} lg={11}>
                  <p className="pricing-p-text">Admin and security features</p>
                </Col>
              </Row>
              <Row className="row-border-top">
                <Col className="col-auto-width" xs={1} sm={1} md={1} lg={1}>
                  <FontAwesomeIcon icon={faCheck} className="pricing-check" />
                </Col>
                <Col className="col-auto-width" xs={11} sm={11} md={11} lg={11}>
                  <p className="pricing-p-text">Workspace-level templates</p>
                </Col>
              </Row>
              <Row className="row-border-top">
                <Col className="col-auto-width" xs={1} sm={1} md={1} lg={1}>
                  <FontAwesomeIcon icon={faCheck} className="pricing-check" />
                </Col>
                <Col className="col-auto-width" xs={11} sm={11} md={11} lg={11}>
                  <p className="pricing-p-text">Collections</p>
                </Col>
              </Row>
              <Row className="row-border-top">
                <Col className="col-auto-width" xs={1} sm={1} md={1} lg={1}>
                  <FontAwesomeIcon icon={faCheck} className="pricing-check" />
                </Col>
                <Col className="col-auto-width" xs={11} sm={11} md={11} lg={11}>
                  <p className="pricing-p-text">Observers</p>
                </Col>
              </Row>
              <Row className="row-border-top">
                <Col className="col-auto-width" xs={1} sm={1} md={1} lg={1}>
                  <FontAwesomeIcon icon={faCheck} className="pricing-check" />
                </Col>
                <Col className="col-auto-width" xs={11} sm={11} md={11} lg={11}>
                  <p className="pricing-p-text">Simple data export</p>
                </Col>
              </Row>
              <Row className="row-border-top">
                <Col>
                  <Link>
                    <p className="pricing-p-text">Learn More About Premium</p>
                  </Link>
                </Col>
              </Row>
            </Col>

            {/* ---------------------------------------------------------------------------------------- */}

            <Col xs={11} sm={11} md={3} className="pricing-table-col-right">
              <div className="pricing-table-top">
                <Row>
                  <div className="spacer-x-small"></div>

                  <h4 className="top-table-title">ENTERPRISE</h4>
                </Row>
                <Row>
                  <div className="spacer-x-small"></div>
                  <div>
                    <h1 className="inline-text amount-text">${totalCost}</h1>
                    <div className="inline-text text-spacer" />
                    <h1 className="inline-text currency-text">CAD</h1>
                  </div>
                </Row>
                <Row>
                  <p className="pricing-p-text">
                    Per user/month - billed annually <br /> ($
                    {Math.round((totalCost * 12 + Number.EPSILON) * 100) /
                      100}{" "}
                    annual price per user)
                  </p>
                  <div className="spacer-x-small"></div>
                </Row>
                <Row>
                  <h4 className="top-table-title">
                    For organizations that need to connect work across teams
                    with more security and controls.
                  </h4>
                </Row>
                <Row>
                  <p className="pricing-p-text">
                    Estimated cost for{" "}
                    <input
                      className={inputStyle}
                      min="50"
                      max="5000"
                      onChange={(e) => handleInputChange(e)}
                      onClick={(e) => handleInputChange(e)}
                      value={numberOfUsers}
                    ></input>{" "}
                    users
                  </p>
                </Row>
                <Row>
                  <Container>
                    <input
                      className="input-slider"
                      min="50"
                      max="5000"
                      type="range"
                      value={numberOfUsers}
                      onChange={(e) => handleInputChange(e)}
                    ></input>
                  </Container>
                </Row>
                {numberOfUsers >= 4999 ? (
                  <Row>
                    <p>
                      For organizations with more than 5,000 users, please
                      contact sales for pricing
                    </p>
                  </Row>
                ) : (
                  <Row>
                    <p>
                      <br></br>
                      <br></br>
                    </p>
                  </Row>
                )}
                <Row>
                  <div>
                    <Button>Contact Sales</Button>
                  </div>
                </Row>
              </div>
              <div className="spacer-small"></div>
              <Row className="row-border-top">
                <h4 className="top-table-title">
                  EVERYTHING IN PREMIUM, PLUS:
                </h4>
              </Row>
              <div className="spacer-x-small"></div>

              <Row className="row-border-top">
                <Col className="col-auto-width" xs={1} sm={1} md={1} lg={1}>
                  <FontAwesomeIcon icon={faCheck} className="pricing-check" />
                </Col>
                <Col className="col-auto-width" xs={11} sm={11} md={11} lg={11}>
                  <p>Unlimited Workspaces</p>
                </Col>
              </Row>
              <Row className="row-border-top">
                <Col className="col-auto-width" xs={1} sm={1} md={1} lg={1}>
                  <FontAwesomeIcon icon={faCheck} className="pricing-check" />
                </Col>
                <Col className="col-auto-width" xs={11} sm={11} md={11} lg={11}>
                  <p>Organization-wide permissions</p>
                </Col>
              </Row>
              <Row className="row-border-top">
                <Col className="col-auto-width" xs={1} sm={1} md={1} lg={1}>
                  <FontAwesomeIcon icon={faCheck} className="pricing-check" />
                </Col>
                <Col className="col-auto-width" xs={11} sm={11} md={11} lg={11}>
                  <p>Organization-visible boards</p>
                </Col>
              </Row>
              <Row className="row-border-top">
                <Col className="col-auto-width" xs={1} sm={1} md={1} lg={1}>
                  <FontAwesomeIcon icon={faCheck} className="pricing-check" />
                </Col>
                <Col className="col-auto-width" xs={11} sm={11} md={11} lg={11}>
                  <p>Public board management</p>
                </Col>
              </Row>
              <Row className="row-border-top">
                <Col className="col-auto-width" xs={1} sm={1} md={1} lg={1}>
                  <FontAwesomeIcon icon={faCheck} className="pricing-check" />
                </Col>
                <Col className="col-auto-width" xs={11} sm={11} md={11} lg={11}>
                  <p>Multi-board guests</p>
                </Col>
              </Row>
              <Row className="row-border-top">
                <Col className="col-auto-width" xs={1} sm={1} md={1} lg={1}>
                  <FontAwesomeIcon icon={faCheck} className="pricing-check" />
                </Col>
                <Col className="col-auto-width" xs={11} sm={11} md={11} lg={11}>
                  <p>Attachment permissions</p>
                </Col>
              </Row>
              <Row className="row-border-top">
                <Col className="col-auto-width" xs={1} sm={1} md={1} lg={1}>
                  <FontAwesomeIcon icon={faCheck} className="pricing-check" />
                </Col>
                <Col className="col-auto-width" xs={11} sm={11} md={11} lg={11}>
                  <p>Power-Up administration</p>
                </Col>
              </Row>
              <Row className="row-border-top">
                <Col className="col-auto-width" xs={1} sm={1} md={1} lg={1}>
                  <FontAwesomeIcon icon={faCheck} className="pricing-check" />
                </Col>
                <Col className="col-auto-width" xs={11} sm={11} md={11} lg={11}>
                  <p>Free SSO and user provisioning</p>
                </Col>
              </Row>
              <Row className="row-border-top">
                <Col>
                  <Link>
                    <p>Learn More About Enterprise</p>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <div className="spacer-small" />
        <Row>
          <Col className="col-align-center">
            <h1 className="pricing-h2-text">Compare our Plans</h1>
            <div className="spacer-x-small" />
            {/* <div>
              Count: {count} */}
            <input
              className="search-input"
              type="text"
              name="search"
              id="search"
              placeholder="Search Filter"
              onChange={handleOnChange}
            />
            {/* </div> */}
          </Col>
        </Row>
        <div className="spacer-small" />
        <Container>
          <Row className="table-top-row">
            <Col md={6}>
              <p className="table-p-bold">FEATURES</p>
            </Col>
            <Col className="align-center">
              <p className="table-p-bold">FREE</p>
            </Col>
            <Col className="align-center">
              <p className="table-p-bold">STANDARD</p>
            </Col>
            <Col className="align-center">
              <p className="table-p-bold">PREMIUM</p>
            </Col>
            <Col className="align-center">
              <p className="table-p-bold">ENTERPRISE</p>
            </Col>
          </Row>
          {population.map((feature, idx) => (
            <Row key={idx} className="pricing-table-row">
              <Col md={6} className="pricing-table-col">
                <p className="table-p-bold">{feature.col1}</p>

                {feature.col2.length > 0 ? (
                  <p className="table-p">{feature.col2}</p>
                ) : (
                  ""
                )}

                {feature.link.length > 0 ? (
                  <Row>
                    <Link>
                      <p className="table-p">{feature.link}</p>
                    </Link>
                  </Row>
                ) : (
                  ""
                )}
              </Col>
              <Col className="pricing-table-col align-center">
                {feature.col3 === "✓" ? (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="pricing-check-table"
                  />
                ) : (
                  ""
                )}
              </Col>
              <Col className="pricing-table-col align-center">
                {feature.col4 === "✓" ? (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="pricing-check-table"
                  />
                ) : (
                  ""
                )}
              </Col>
              <Col className="pricing-table-col align-center align-vertical">
                {feature.col5 === "✓" ? (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="pricing-check-table"
                  />
                ) : (
                  ""
                )}
              </Col>
              <Col className="pricing-table-col align-center">
                {feature.col6 === "✓" ? (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="pricing-check-table"
                  />
                ) : (
                  ""
                )}
              </Col>
            </Row>
          ))}
        </Container>
        <div className={footerTransitionStyle}>
          <div className="spacer"></div>
          <div className="spacer-x-small" />
        </div>
      </section>

      <LoginFooter colorMode={colorMode} />
    </>
  );

  return content;
};

export default Pricing;
