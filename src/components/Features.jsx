import React, { useState } from "react";
import LoginHeader from "../features/pages/LoginHeader";
import "./Features.scss";
import LoginFooter from "../features/pages/LoginFooter";
import { useEffect } from "react";

const Features = () => {
  const [colorMode, setColorMode] = useState(
    JSON.parse(localStorage.getItem("colorMode"))
  );

  const featuresStyle =
    colorMode === "Light"
      ? "features-light"
      : "" || colorMode === "Dark"
      ? "features-dark"
      : "";

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
    const colorMode = JSON.parse(localStorage.getItem("colorMode"));

    if (colorMode === null) {
      localStorage.setItem("colorMode", JSON.stringify("Light"));
      setColorMode("Light");
    }
  }, [colorMode, featuresStyle]);

  const content = (
    <>
      <LoginHeader
        onChangeColorMode={onChangeColorMode}
        colorMode={colorMode}
      />
      <section className={featuresStyle}>
        <div className="spacer"></div>
        <h1 classname="features-header-text">Features</h1>
      </section>
      <LoginFooter colorMode={colorMode} />
    </>
  );

  return content;
};

export default Features;
