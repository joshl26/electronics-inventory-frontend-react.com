import { Link } from "react-router-dom";

import React from "react";
import LoginHeader from "../features/pages/LoginHeader";

const Public = () => {
  const content = (
    <section className="public">
      <LoginHeader />
    </section>
  );

  return content;
};

export default Public;
