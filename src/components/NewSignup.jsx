import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const NewSignup = ({ colorMode }) => {
  const signupSectionStlye =
    colorMode === "Light" ? "signup-section-light" : "signup-section-dark";

  return <section className={signupSectionStlye}></section>;
};

export default NewSignup;
