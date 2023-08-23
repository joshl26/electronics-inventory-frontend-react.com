import Lottie from "lottie-react";
import React, { useState } from "react";
import { Image } from "react-bootstrap";
import HamburgerIcon from "../svg/HamburgerMenu.json";
import background from "../img/background_2.png";

const LoadingPage = () => {
  const [colorMode, setColorMode] = useState(
    JSON.parse(localStorage.getItem("colorMode"))
  );

  const publicStyle =
    colorMode === "Light"
      ? "public-light"
      : "" || colorMode === "Dark"
      ? "public-dark"
      : "";

  const content = (
    <section className={publicStyle}>
      {/* <Image className="loading-background" src={background} /> */}
      <Lottie
        className="hamburger-icon"
        animationData={HamburgerIcon}
        loop={true}
      />
    </section>
  );

  return content;
};

export default LoadingPage;
