import React from "react";
import LandingPage from "../features/pages/LandingPage";
import LoginHeader from "../features/pages/LoginHeader";
import HeroImage from "../features/pages/HeroImage";

const Public = () => {
  const content = (
    <section className="public">
      <HeroImage />
      <LoginHeader />
      <LandingPage />
    </section>
  );

  return content;
};

export default Public;
