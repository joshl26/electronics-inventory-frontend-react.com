import { Button, Col, Container, Row } from "react-bootstrap";
import "./LandingPage.scss";
import Lottie from "lottie-react";
import BusinessMetrics from "../../svg/BusinessMetrics.json";

const LandingPage = () => {
  return (
    <div className="landing_container">
      <div className="landing-one">
        <Container>
          <Row>
            <Col>
              <div className="spacer"></div>
              <h3 className="landing-one-text">Inventory Control Simplified</h3>
              <h1 className="landing-one-text">Manage your parts inventory</h1>
              <h1 className="landing-one-text">in seconds, FROM ANYWHERE!</h1>
              <h3 className="landing-one-text">
                Take the guesswork out of inventory control and management.
                Repetetive tasks like repurchase set points, inventory costing,
                JIT managment are automaticallly calculated by our software.
              </h3>
              <div className="landing-spacer"></div>
              <Button variant="danger" className="btn-signup">
                Sign Up Now and Start your Free Trial!
              </Button>
            </Col>
            <Col>
              <div className="landing-one-image"></div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="landing-two">
        <Row>
          <Col className="cube-one">
            <div className="cube-one"></div>
          </Col>
          <Col className="cube-two">
            <div className="cube-two"></div>
          </Col>
        </Row>
      </div>
      <div className="landing-two">
        <Row>
          <Col className="cube-two">
            <div className="cube-two"></div>
          </Col>
          <Col className="cube-one">
            <div className="cube-one"></div>
          </Col>
        </Row>
      </div>

      <div className="landing-three">
        <h1 className="landing-header">Why choose our Software?</h1>
        <p className="landing-paragraph">
          Electronics inventory software is the best way to keep track of stock
          and ensure that your business has the right items in the right
          amounts. It can provide you with real-time data on current stock
          levels and allow you to quickly and accurately reorder items when
          necessary. It can also allow you to track and trace items from the
          moment they enter your inventory until the moment they are sold,
          providing you with an unprecedented level of visibility and control
          over your inventory. Finally, electronics inventory software can help
          you easily manage pricing, discounts, returns, and other aspects of
          inventory management. In short, electronics inventory software can
          provide your business with a powerful and efficient way to manage
          inventory and ensure that you have the right items in the right
          amounts at all times..
        </p>
        <div className="business-metrics">
          <Lottie animationData={BusinessMetrics} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
