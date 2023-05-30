import React from "react";
import { Canvas } from "@react-three/fiber";
import { extend } from "@react-three/fiber";
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";

import { Office } from "./Office";
import LandingPage from "../features/pages/LandingPage";
import { Skateboard } from "./Skateboard";
import LoginFooter from "../features/pages/LoginFooter";
import CustomerGallery from "../features/pages/CustomerGallery";
extend({ OrbitControls, ScrollControls });

const Experience = ({
  colorMode,
  setColorMode,
  // eslint-disable-next-line
  backgroundColor = { backgroundColor },
}) => {
  // eslint-disable-next-line
  const SwipeUpClickHandler = () => {
    window.scrollTo(0, 0);
  };

  // eslint-disable-next-line
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
      style={{ background: backgroundColor }}
      camera={{
        fov: 64,
        position: [2.3, 1.5, 2.3],
      }}
    >
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={5.15} damping={0.25}>
        <Skateboard />
        <Office />
        <Scroll html>
          <LandingPage colorMode={colorMode} />
          <CustomerGallery />
          <LoginFooter colorMode={colorMode} />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
};

export default Experience;
