import React from "react";
import { Canvas } from "@react-three/fiber";
import { extend } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Scroll,
  ScrollControls,
} from "@react-three/drei";
import "./Experience.scss";
import { Office } from "./Office";
import LandingPage from "../features/pages/LandingPage";
import { Skateboard } from "./Skateboard";
import LoginFooter from "../features/pages/LoginFooter";
import CustomerGallery from "../features/pages/CustomerGallery";
import Suzie from "./Suzie";
import Ballpit from "./Ballpit";
import NewSignup from "./NewSignup";
extend({ OrbitControls, ScrollControls });

const Experience = ({ colorMode }) => {
  const backgroundColor = colorMode === "Light" ? "#e76f51" : "#264653";

  return (
    // <Canvas
    //   flat
    //   shadows
    //   style={{ background: backgroundColor }}
    //   camera={{ position: [0, 0, 100], fov: 100 }}
    // >
    <Canvas
      gl={{ stencil: false, antialias: false }}
      camera={{ position: [0, 0, 20], fov: 50, near: 17, far: 40 }}
    >
      <Environment preset="city" />
      <fog attach="fog" args={[backgroundColor, 25, 35]} />
      <color attach="background" args={[backgroundColor]} />

      <pointLight intensity={0.5} />
      <ambientLight intensity={1.85} />
      <spotLight
        castShadow
        intensity={0.2}
        angle={Math.PI / 7}
        position={[150, 150, 250]}
        penumbra={1}
        shadow-mapSize={2048}
      />

      {/* <OrbitControls
        enableZoom={false}
        maxPolarAngle={0}
        minPolarAngle={Math.PI / 2}
      /> */}
      <ScrollControls pages={8.15} damping={0.1}>
        {/* <Skateboard />
        <Office /> */}
        {/* <Suzie /> */}
        <Ballpit colorMode={colorMode} />
        <Scroll html>
          <LandingPage colorMode={colorMode} />
          <CustomerGallery />
          <NewSignup colorMode={colorMode} />
          <LoginFooter colorMode={colorMode} />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
};

export default Experience;
