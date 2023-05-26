import React, { useState } from "react";
import LandingPage from "../features/pages/LandingPage";
import LoginHeader from "../features/pages/LoginHeader";
// import HeroImage from "../features/pages/HeroImage";
import "./Public.scss";
import LoginFooter from "../features/pages/LoginFooter";
import SwipeUpIcon from "../svg/SwipeUpIcon.json";
import Lottie from "lottie-react";
import CustomerGallery from "../features/pages/CustomerGallery";
import { useEffect, useCallback } from "react";
import HamburgerIcon from "../svg/HamburgerMenu.json";

const Public = () => {
  const [loading, setLoading] = useState(true);

  const [colorMode, setColorMode] = useState(
    JSON.parse(localStorage.getItem("colorMode"))
  );

  const publicStyle =
    colorMode === "Light"
      ? "public-light"
      : "" || colorMode === "Dark"
      ? "public-dark"
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
    setLoading(true);
    const timer = setTimeout(() => {
      console.log("This will run after 1 second!");
      setLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const colorMode = JSON.parse(localStorage.getItem("colorMode"));

    if (colorMode === null) {
      localStorage.setItem("colorMode", JSON.stringify("Light"));
      setColorMode("Light");
    }
  }, [colorMode, publicStyle]);

  const content = loading ? (
    <section className={publicStyle}>
      <Lottie
        className="hamburger-icon"
        animationData={HamburgerIcon}
        loop={true}
      />
    </section>
  ) : (
    <section className={publicStyle}>
      <Lottie
        onClick={SwipeUpClickHandler}
        className="swipe-up-icon"
        animationData={SwipeUpIcon}
        loop={true}
      />
      {/* <HeroImage /> */}
      <LoginHeader
        onChangeColorMode={onChangeColorMode}
        colorMode={colorMode}
      />
      <LandingPage colorMode={colorMode} />
      <CustomerGallery />
      <LoginFooter colorMode={colorMode} />
    </section>
  );

  return content;
};

export default Public;
