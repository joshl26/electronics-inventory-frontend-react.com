import { Link } from "react-router-dom";

import React from "react";

const Public = () => {
  const content = (
    <section className="public">
      <Link to="/login">Employee Login</Link>
    </section>
  );

  return content;
};

export default Public;
