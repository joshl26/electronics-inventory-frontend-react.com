import React from "react";
import LandingPage from "../features/pages/LandingPage";
import LoginHeader from "../features/pages/LoginHeader";
import HeroImage from "../features/pages/HeroImage";
import "./Public.scss";
import LoginFooter from "../features/pages/LoginFooter";
import { Container } from "react-bootstrap";
import SwipeUpIcon from "../svg/SwipeUpIcon.json";
import Lottie from "lottie-react";

const Public = () => {
  const SwipeUpClickHandler = () => {
    window.scrollTo(0, 0);
    console.log("Swipe up clikc handler");
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
      <LoginFooter />
    </section>
  );

  return content;
};

export default Public;
