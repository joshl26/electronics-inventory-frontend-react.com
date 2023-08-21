import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import {
  FaGlasses,
  FaHammer,
  FaHome,
  FaPlus,
  FaPlusCircle,
} from "react-icons/fa";
import "./SideBar.css";

const SideBar = () => {
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

  const content = (
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
            <Col md={2}>
              <FaHome className="sidebar-icon" />
            </Col>
            <Col>
              <Link to="/dash">
                <p className="sidebar-links"> DashBoard</p>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col md={2}>
              <FaHammer className="sidebar-icon" />
            </Col>
            <Col>
              <Link to="/dash/parts">
                <p className="sidebar-links"> Partslist</p>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col md={2}>
              <FaPlusCircle className="sidebar-icon" />
            </Col>
            <Col>
              <Link to="/dash/parts/new">
                <p className="sidebar-links"> Add New Parts</p>
              </Link>
            </Col>
          </Row>

          <Row>
            <Col md={2}>
              <FaGlasses className="sidebar-icon" />
            </Col>
            <Col>
              <Link to="/dash/notes">
                <p className="sidebar-links"> View Notes</p>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col md={2}>
              <FaPlusCircle className="sidebar-icon" />
            </Col>
            <Col>
              <Link to="/dash/notes/new">
                <p className="sidebar-links"> Add new Notes</p>
              </Link>
            </Col>
          </Row>
          <Row>
            {(isManager || isAdmin) && (
              <>
                <Col md={2}>
                  <FaGlasses className="sidebar-icon" />
                </Col>
                <Col>
                  <Link to="/dash/users">
                    <p className="sidebar-links">View User Settings</p>
                  </Link>
                </Col>
              </>
            )}
          </Row>
          <Row>
            {(isManager || isAdmin) && (
              <>
                <Col md={2}>
                  <FaPlusCircle className="sidebar-icon" />
                </Col>
                <Col>
                  <Link to="/dash/users/new">
                    <p className="sidebar-links"> Add new User</p>
                  </Link>
                </Col>
              </>
            )}
          </Row>
        </Col>
      </section>
    </div>
  );

  return content;
};

export default SideBar;
