import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "./LandingPage.scss";
import Lottie from "lottie-react";
import BusinessMetrics from "../../svg/BusinessMetrics.json";

import ei_1 from "../../img/ei_1.png";
import CustomerReviews from "../../components/CustomerReviews";

const LandingPage = () => {
  return (
    <>
      <div className="landing-one">
        <div className="header-spacer"></div>
        <Container>
          <div className="spacer_small"></div>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <h3 className="landing-one-text landing-header-3">
                Inventory Control Simplified
              </h3>
              <h1 className="landing-one-text landing-header-1">
                Manage your parts inventory
              </h1>
              <h1 className="landing-one-text landing-header-1">
                in seconds, FROM ANYWHERE!
              </h1>
              <h2 className="landing-one-text landing-header-2">
                Take the guesswork out of inventory control and management.
                Repetetive tasks like repurchase set points, inventory costing,
                JIT managment are automaticallly calculated by our software.
              </h2>
              <div className="landing-spacer"></div>
              <Container className="align-center">
                <Button variant="danger" className="btn-signup">
                  Sign Up Now and Start your Free Trial!
                </Button>
              </Container>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <div className="landing-one-image">
                <Image className="landing-one-image" src={ei_1}></Image>
              </div>
            </Col>
          </Row>
          <div className="spacer"></div>
        </Container>
      </div>
      <CustomerReviews />
      <div className="landing-two">
        <Row>
          <Col xs={12} md={6} lg={6} className="cube-one">
            <div className="cube-one"></div>
          </Col>
          <Col xs={12} md={6} lg={6} className="cube-two">
            <div className="cube-two"></div>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={6} lg={6} className="cube-three">
            <div className="cube-three"></div>
          </Col>
          <Col xs={12} md={6} lg={6} className="cube-four">
            <div className="cube-four"></div>
          </Col>
        </Row>
      </div>

      <div className="landing-three">
        <Container>
          <h1 className="landing-header">Why choose our Software?</h1>
          <p className="landing-paragraph">
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
        </Container>
        <div className="business-metrics">
          <Lottie animationData={BusinessMetrics} loop={true} />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
