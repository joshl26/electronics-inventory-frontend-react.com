import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "./LandingPage.scss";
import Lottie from "lottie-react";
import BusinessMetrics from "../../svg/BusinessMetrics.json";

import ei_1 from "../../img/ei_1.png";
import CustomerReviews from "../../components/CustomerReviews";

const LandingPage = ({ colorMode }) => {
  const landingHeader1Style =
    colorMode === "Light"
      ? "landing-one-text-light landing-header-1"
      : "landing-one-text-dark landing-header-1";

  const landingHeader1InlineStyle =
    colorMode === "Light"
      ? "landing-one-text-light landing-header-1-inline"
      : "landing-one-text-dark landing-header-1-inline";

  const landingHeader2Style =
    colorMode === "Light"
      ? "landing-one-text-light landing-header-2"
      : "landing-one-text-dark landing-header-2";

  const landingHeaderStyle =
    colorMode === "Light"
      ? "landing-one-text-light landing-header"
      : "landing-one-text-dark landing-header";

  const landingParagraphStyle =
    colorMode === "Light"
      ? "landing-one-text-light landing-paragraph"
      : "landing-one-text-dark landing-paragraph";

  const landingOneImageStyle =
    colorMode === "Light"
      ? "landing-one-image-light"
      : "landing-one-image-dark";

  const SignupButtonStyle =
    colorMode === "Light" ? "btn-signup-light" : "btn-signup-dark";

  return (
    <>
      <div className="landing-one">
        <Container>
          <div className="spacer_medium"></div>
          <Row>
            <Col className="landing_one_row" xs={12} md={6} lg={6}>
              <h1 className={landingHeader1Style}>Inventory Control</h1>
              <h3 className={landingHeader1InlineStyle}>Simplified</h3>
              <h2 className={landingHeader2Style}>
                Take the guesswork out of inventory control and management.
                Repetetive tasks like repurchase set points, inventory costing,
                JIT managment are automaticallly calculated by our software.
              </h2>
              <div className="landing-spacer"></div>
              <Button variant="danger" className={SignupButtonStyle}>
                Sign Up Now and Start your Free Trial!
              </Button>
            </Col>
            <Col className="landing_one_row" xs={12} md={6} lg={6}>
              <div className="spacer_small"></div>
              <div>
                <Image className={landingOneImageStyle} src={ei_1}></Image>
              </div>
            </Col>
          </Row>
          <div className="spacer_small"></div>
        </Container>
      </div>
      <CustomerReviews />
      <div className="spacer_small"></div>
      <div className="landing-three">
        <Container>
          <h1 className={landingHeaderStyle}>Why choose our Software?</h1>
          <p className={landingParagraphStyle}>
            Electronics inventory software is the best way to keep track of
            stock and ensure that your business has the right items in the right
            amounts. It can provide you with real-time data on current stock
            levels and allow you to quickly and accurately reorder items when
            necessary. It can also allow you to track and trace items from the
            moment they enter your inventory until the moment they are sold,
            providing you with an unprecedented level of visibility and control
            over your inventory. Finally, electronics inventory software can
            help you easily manage pricing, discounts, returns, and other
            aspects of inventory management. In short, electronics inventory
            software can provide your business with a powerful and efficient way
            to manage inventory and ensure that you have the right items in the
            right amounts at all times..
          </p>
          <div className="business-metrics">
            <Lottie animationData={BusinessMetrics} loop={true} />
          </div>
        </Container>
      </div>
    </>
  );
};

export default LandingPage;
