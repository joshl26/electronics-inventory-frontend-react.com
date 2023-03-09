import React from "react";
import LandingPage from "../features/pages/LandingPage";
import LoginHeader from "../features/pages/LoginHeader";
import HeroImage from "../features/pages/HeroImage";
import "./Public.scss";
import LoginFooter from "../features/pages/LoginFooter";
import SwipeUpIcon from "../svg/SwipeUpIcon.json";
import Lottie from "lottie-react";
import { Row, Col, Container } from "react-bootstrap";
import CustomerGallery from "../features/pages/CustomerGallery";

const Public = () => {
  const SwipeUpClickHandler = () => {
    window.scrollTo(0, 0);
  };

  const content = (
    <section className="public">
      <Lottie
        onClick={SwipeUpClickHandler}
        className="swipe-up-icon"
        animationData={SwipeUpIcon}
        loop={true}
      />

      <HeroImage />
      <LoginHeader />

      <div className="large-spacer">
        <Container>
          <h1 className="hero-header-text">
            Electronics Inventory Management and Control Software
          </h1>
        </Container>
      </div>
      <LandingPage />
      <CustomerGallery />

      <LoginFooter />
    </section>
  );

  return content;
};

export default Public;
