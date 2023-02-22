import { Link } from "react-router-dom";

import React from "react";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">My Business!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Located in Beautiful Beverly Hills California. Our trained staff are
          ready to meet your needs.
        </p>
        <address className="public__addr">
          My Business
          <br />
          555 Lehman Dr.
          <br />
          Beverly Hills, CA 90210
          <br />
          <a href="tel:+9999999991">(999) 999-9991</a>
        </address>
        <br />
        <p>Owner: Josh Lehman</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );

  return content;
};

export default Public;
