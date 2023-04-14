import { Container } from "react-bootstrap";
import "./LandingPage.scss";
import Lottie from "lottie-react";
import BusinessMetrics from "../../svg/BusinessMetrics.json";
import { faChampagneGlasses } from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
  return (
    <div className="landing_container">
      <Container className="landing-text-container">
        <div className="spacer"></div>
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
      </Container>
    </div>
  );
};

export default LandingPage;
