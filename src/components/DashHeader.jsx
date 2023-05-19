import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCirclePlus,
  faFilePen,
  faUserGear,
  faUserPlus,
  faRightFromBracket,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Link, useLocation } from "react-router-dom";

import { useSendLogoutMutation } from "../features/auth/authApiSlice";

import Lottie from "lottie-react";
import HamburgerMenu from "../svg/HamburgerMenu.json";

import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

import "./DashHeader.scss";

import useAuth from "../hooks/useAuth";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const DASH_REGEX = /^\/dash(\/)?$/;
const NOTES_REGEX = /^\/dash\/notes(\/)?$/;
const USERS_REGEX = /^\/dash\/users(\/)?$/;

const DashHeader = () => {
  const { isManager, isAdmin } = useAuth();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [sendLogout, { isLoading, isSuccess, isError, error }] =
    useSendLogoutMutation();

  useEffect(() => {
    if (isSuccess) navigate("/");
  }, [isSuccess, navigate]);

  const onNewNoteClicked = () => navigate("/dash/notes/new");
  const onNewUserClicked = () => navigate("/dash/users/new");
  const onNotesClicked = () => navigate("/dash/notes");
  const onUsersClicked = () => navigate("/dash/users");
  const onHomeClicked = () => navigate("/dash");

  let dashClass = null;
  if (
    !DASH_REGEX.test(pathname) &&
    !NOTES_REGEX.test(pathname) &&
    !USERS_REGEX.test(pathname)
  ) {
    dashClass = "dash-header__container--small";
  }

  let newNoteButton = null;
  if (NOTES_REGEX.test(pathname)) {
    newNoteButton = (
      <button
        className="icon-button"
        title="New Note"
        onClick={onNewNoteClicked}
      >
        <FontAwesomeIcon icon={faFileCirclePlus} />
      </button>
    );
  }

  let newUserButton = null;
  if (USERS_REGEX.test(pathname)) {
    newUserButton = (
      <button
        className="icon-button"
        title="New User"
        onClick={onNewUserClicked}
      >
        <FontAwesomeIcon icon={faUserPlus} />
      </button>
    );
  }

  let userButton = null;
  if (isManager || isAdmin) {
    if (!USERS_REGEX.test(pathname) && pathname.includes("/dash")) {
      userButton = (
        <button className="icon-button" title="Users" onClick={onUsersClicked}>
          <FontAwesomeIcon icon={faUserGear} />
        </button>
      );
    }
  }

  let notesButton = null;
  if (!NOTES_REGEX.test(pathname) && pathname.includes("/dash")) {
    notesButton = (
      <button className="icon-button" title="Notes" onClick={onNotesClicked}>
        <FontAwesomeIcon icon={faFilePen} />
      </button>
    );
  }

  const homeButton =
    pathname !== "/dash" ? (
      <button className="icon-button" onClick={onHomeClicked} title="Home">
        <FontAwesomeIcon icon={faHouse} />
      </button>
    ) : (
      ""
    );

  const logoutButton = (
    <button className="icon-button" title="Logout" onClick={sendLogout}>
      <FontAwesomeIcon icon={faRightFromBracket} />
    </button>
  );

  const errClass = isError ? "errmsg" : "offscreen";

  let buttonContent;
  if (isLoading) {
    buttonContent = <p>Logging Out...</p>;
  } else {
    buttonContent = (
      <>
        {homeButton}
        {newNoteButton}
        {newUserButton}
        {notesButton}
        {userButton}
        {logoutButton}
      </>
    );
  }

  const content = (
    <header className={`dash-header__container ${dashClass}`}>
      <div>
        {error ? <p className={errClass}>{error?.data?.message}</p> : ""}
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          className="navbar fixed-top navbar-light bg-light navbar-login"
        >
          <a href="" className="dash-header__nav hero-link">
            <Lottie
              className="header_icon"
              animationData={HamburgerMenu}
              loop={false}
            />
            {/* <h1 className="header_text">Ei</h1> */}
          </a>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Inventory" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  View Inventory
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  Add New Inventory
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">
                  Edit Inventory
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Inventory Transactions
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Purchasing" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Purchase Order
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  Inventory Levels
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">
                  Cost Reports
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Engineering" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Engineering BOM
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item href="#action/3.2">
                  Datasheets
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item href="#action/3.3">
                  MSDA Sheets
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <input type="text" placeholder="Search here" />
            {buttonContent}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );

  return content;
};
export default DashHeader;
