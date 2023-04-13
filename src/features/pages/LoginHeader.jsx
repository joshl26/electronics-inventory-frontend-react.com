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
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="navbar_container">
        <Navbar.Brand href="#home">
          <Lottie
            className="header_icon"
            animationData={HamburgerMenu}
            loop={true}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="active" href="#features">
              What is Ei?
            </Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Solutions</Nav.Link>
            <NavDropdown title="Plans and Pricing" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/">Free Tier</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Creator Tier</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Corporate Tier</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link to="/login"> User Login</Link>
            </Nav.Link>
            <Nav.Link eventKey={2} href="/">
              Signup
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default LoginHeader;
