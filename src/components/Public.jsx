import React from "react";
import LandingPage from "../features/pages/LandingPage";
import LoginHeader from "../features/pages/LoginHeader";
import HeroImage from "../features/pages/HeroImage";
import "./Public.scss";

const Public = () => {
  const content = (
    <section className="public">
      <HeroImage />
      <LoginHeader />
      <div className="large_spacer"></div>
      <LandingPage />
      <div className="spacer"></div>
    </section>
  );

  return content;
};

export default Public;
