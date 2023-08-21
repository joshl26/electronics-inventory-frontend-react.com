import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { FaGlasses, FaHammer, FaHome, FaPlusCircle } from "react-icons/fa";
import "./SideBar.css";

const SideBar = ({ sidebarShown }) => {
  const { username, isManager, isAdmin } = useAuth();

  const delay = 1;

  const [dateState, setDateState] = useState(new Date());

  const today = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(dateState);

  useEffect(() => {
    setInterval(() => setDateState(new Date()), delay * 1000);
    return () => {};
  }, []);

  return (
    <div>
      {sidebarShown ? (
        <div className="dash-sidebar-container">
          <section className="welcome">
            <Col>
              <Row>
                <p className="welcome-today-text">{today}</p>
              </Row>
              <Row>
                <h1 className="welcome-header-text">Welcome {username}</h1>
              </Row>
              <Row>
                <div className="spacer-small"></div>
              </Row>
              <Row className="sidebar-links">
                <Col md={2}>
                  <FaHome className="sidebar-icon" />
                </Col>
                <Col>
                  <Link to="/dash">
                    <p className="sidebar-links sidebar-text"> DashBoard</p>
                  </Link>
                </Col>
              </Row>
              <Row className="sidebar-links">
                <Col md={2}>
                  <FaHammer className="sidebar-icon" />
                </Col>
                <Col>
                  <Link to="/dash/parts" className="sidebar-links sidebar-text">
                    <p>Partslist</p>
                  </Link>
                </Col>
              </Row>
              <Row className="sidebar-links">
                <Col md={2}>
                  <FaPlusCircle className="sidebar-icon" />
                </Col>
                <Col>
                  <Link to="/dash/parts/new">
                    <p className="sidebar-links sidebar-text"> Add New Parts</p>
                  </Link>
                </Col>
              </Row>

              <Row className="sidebar-links">
                <Col md={2}>
                  <FaGlasses className="sidebar-icon" />
                </Col>
                <Col>
                  <Link to="/dash/notes">
                    <p className="sidebar-links sidebar-text"> View Notes</p>
                  </Link>
                </Col>
              </Row>
              <Row className="sidebar-links">
                <Col md={2}>
                  <FaPlusCircle className="sidebar-icon" />
                </Col>
                <Col>
                  <Link to="/dash/notes/new">
                    <p className="sidebar-links sidebar-text"> Add new Notes</p>
                  </Link>
                </Col>
              </Row>
              <Row className="sidebar-links">
                {(isManager || isAdmin) && (
                  <>
                    <Col md={2}>
                      <FaGlasses className="sidebar-icon" />
                    </Col>
                    <Col>
                      <Link to="/dash/users">
                        <p className="sidebar-links sidebar-text">
                          View User Settings
                        </p>
                      </Link>
                    </Col>
                  </>
                )}
              </Row>
              <Row className="sidebar-links">
                {(isManager || isAdmin) && (
                  <>
                    <Col md={2}>
                      <FaPlusCircle className="sidebar-icon" />
                    </Col>
                    <Col>
                      <Link to="/dash/users/new">
                        <p className="sidebar-links sidebar-text">
                          Add new User
                        </p>
                      </Link>
                    </Col>
                  </>
                )}
              </Row>
            </Col>
          </section>
        </div>
      ) : (
        <div className="dash-sidebar-container-minimized">
          <section className="welcome">
            <Col>
              <Row>
                <div className="spacer-small"></div>
              </Row>
              <Row className="sidebar-links">
                <Col>
                  <Link className="sidebar-links sidebar-text" to="/dash">
                    <FaHome className="sidebar-icon" />
                  </Link>
                </Col>
              </Row>
              <Row className="sidebar-links">
                <Col>
                  <Link to="/dash/parts" className="sidebar-links sidebar-text">
                    <FaHammer className="sidebar-icon" />
                  </Link>
                </Col>
              </Row>
              <Row className="sidebar-links">
                <Col>
                  <Link
                    className="sidebar-links sidebar-text"
                    to="/dash/parts/new"
                  >
                    <FaPlusCircle className="sidebar-icon" />
                  </Link>
                </Col>
              </Row>
              <Row className="sidebar-links">
                <Col>
                  <Link className="sidebar-links sidebar-text" to="/dash/notes">
                    <FaGlasses className="sidebar-icon" />
                  </Link>
                </Col>
              </Row>
              <Row className="sidebar-links">
                <Col>
                  <Link
                    className="sidebar-links sidebar-text"
                    to="/dash/notes/new"
                  >
                    <FaPlusCircle className="sidebar-icon" />
                  </Link>
                </Col>
              </Row>
              <Row className="sidebar-links">
                {(isManager || isAdmin) && (
                  <Col>
                    <Link
                      className="sidebar-links sidebar-text"
                      to="/dash/users"
                    >
                      <FaGlasses className="sidebar-icon" />
                    </Link>
                  </Col>
                )}
              </Row>
              <Row className="sidebar-links">
                {(isManager || isAdmin) && (
                  <Col>
                    <Link
                      className="sidebar-links sidebar-text"
                      to="/dash/users/new"
                    >
                      <FaPlusCircle className="sidebar-icon" />
                    </Link>
                  </Col>
                )}
              </Row>
            </Col>
          </section>
        </div>
      )}
      ;
    </div>
  );
};

export default SideBar;
