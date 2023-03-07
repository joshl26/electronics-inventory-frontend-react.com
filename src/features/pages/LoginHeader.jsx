import "./LoginHeader.scss";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import brandIcon from "../../img/eiicon.png";
import Lottie from "lottie-react";
import HamburgerMenu from "../../svg/HamburgerMenu.json";

const LoginHeader = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Lottie animationData={HamburgerMenu} loop={true} />
      <Container className="navbar_container">
        <Navbar.Brand href="#home">
          <img className="header_icon" src={brandIcon} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">What is Ei?</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Solutions</Nav.Link>
            <NavDropdown title="Plans and Pricing" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Free Tier</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Creator Tier
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Corporate Tier
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Employee Login</Nav.Link>
            <Nav.Link eventKey={2} href="/">
              New User Signup
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default LoginHeader;
