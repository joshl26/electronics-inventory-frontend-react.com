import React, { useState } from "react";
import LandingPage from "../features/pages/LandingPage";
import LoginHeader from "../features/pages/LoginHeader";
import HeroImage from "../features/pages/HeroImage";
import "./Public.scss";
import LoginFooter from "../features/pages/LoginFooter";
import SwipeUpIcon from "../svg/SwipeUpIcon.json";
import Lottie from "lottie-react";
import CustomerGallery from "../features/pages/CustomerGallery";
import { useEffect } from "react";

const Public = () => {
  const [colorMode, setColorMode] = useState([]);

  const publicStyle = colorMode === "Light" ? "public-light" : "public-dark";

  const SwipeUpClickHandler = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const colorMode = JSON.parse(localStorage.getItem("colorMode"));

    if (colorMode) {
      setColorMode(colorMode);
    } else {
      localStorage.setItem("colorMode", JSON.stringify("Light"));
    }
  }, [colorMode]);

  const content = (
    <section className={publicStyle}>
      <Lottie
        onClick={SwipeUpClickHandler}
        className="swipe-up-icon"
        animationData={SwipeUpIcon}
        loop={true}
      />
      {/* <HeroImage /> */}
      <LoginHeader setColorMode={setColorMode} colorMode={colorMode} />
      <LandingPage colorMode={colorMode} />
      {/* <CustomerGallery /> */}
      {/* <LoginFooter /> */}
    </section>
  );

  return content;
};

export default Public;
