import "./LoginHeader.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Lottie from "lottie-react";
import HamburgerMenu from "../../svg/HamburgerMenu.json";
import { Link } from "react-router-dom";

const LoginHeader = () => {
  return (
    <Navbar
      className="navbar fixed-top navbar-light bg-light"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container className="navbar_container">
        <Navbar.Brand>
          <h1 className="logo_text">Ei</h1>

          {/* <Lottie
            className="header_icon"
            animationData={HamburgerMenu}
            loop={true}
          /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <div className="nav-item">
              <Link className="nav-link" to="/">
                Inventory Tracker
              </Link>
            </div>
            <div className="nav-item">
              <Link className="nav-link" to="/">
                How It Works
              </Link>
            </div>
            <div className="nav-item">
              <Link className="nav-link" to="/">
                Features
              </Link>
            </div>
            <NavDropdown title="Plans and Pricing" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/">Free Tier</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Creator Tier</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Corporate Tier</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link className="link_text" to="/">
              Signup
            </Link>
            <Link className="link_text" to="/login">
              Log In
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default LoginHeader;
