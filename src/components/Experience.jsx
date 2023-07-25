import React from "react";
import LandingPage from "../features/pages/LandingPage";
import LoginFooter from "../features/pages/LoginFooter";
import CustomerGallery from "../features/pages/CustomerGallery";
import NewSignup from "./NewSignup";
import "./Experience.scss";

const Experience = ({ colorMode }) => {
  return (
    <>
      <LandingPage colorMode={colorMode} />
      <CustomerGallery />
      <NewSignup colorMode={colorMode} />
      <LoginFooter colorMode={colorMode} />
    </>
  );
};

export default Experience;
