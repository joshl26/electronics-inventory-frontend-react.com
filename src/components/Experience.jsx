import React from "react";
import { Canvas } from "@react-three/fiber";
import { extend } from "@react-three/fiber";
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";

import { Office } from "./Office";
import LandingPage from "../features/pages/LandingPage";
import LoginHeader from "../features/pages/LoginHeader";
import LoginFooter from "../features/pages/LoginFooter";
import SwipeUpIcon from "../svg/SwipeUpIcon.json";
import CustomerGallery from "../features/pages/CustomerGallery";
import Lottie from "lottie-react";
extend({ OrbitControls, ScrollControls });

const Experience = ({ publicStyle, colorMode, setColorMode }) => {
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

  return (
    <Canvas
      camera={{
        fov: 64,
        position: [2.3, 1.5, 2.3],
      }}
    >
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={5.2} damping={0.25}>
        <Office />
        <Scroll html>
          <h1 style={{ top: "0", position: "sticky" }}>
            html in here (optional)
          </h1>
          <h1 style={{ top: "100vh", position: "absolute" }}>second page</h1>
          <h1 style={{ top: "200vh", position: "absolute" }}>third page</h1>
          <LandingPage colorMode={colorMode} />
          <CustomerGallery />
          <LoginFooter colorMode={colorMode} />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
};

export default Experience;
