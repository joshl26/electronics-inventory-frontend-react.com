import React, { useState } from "react";
import LoginHeader from "../features/pages/LoginHeader";
import Experience from "../components/Experience";
import { useEffect } from "react";
import LoadingPage from "./LoadingPage";
import "./Public.scss";

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

  const backgroundColor = colorMode === "Light" ? "#e76f51" : "#264653";
  const SwipeUpClickHandler = () => {
    window.scrollTo(0, 0);
  };

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

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
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
    <LoadingPage />
  ) : (
    <section>
      <LoginHeader
        onChangeColorMode={onChangeColorMode}
        colorMode={colorMode}
      />
      <Experience colorMode={colorMode} backgroundColor={backgroundColor} />
    </section>
  );

  return content;
};

export default Public;

{
  /* <section className={publicStyle}>
        <Lottie
          onClick={SwipeUpClickHandler}
          className="swipe-up-icon"
          animationData={SwipeUpIcon}
          loop={true}
        />
        <LoginHeader
          onChangeColorMode={onChangeColorMode}
          colorMode={colorMode}
        />
        <LandingPage colorMode={colorMode} />
        <CustomerGallery />
        <LoginFooter colorMode={colorMode} />
      </section> */
}
