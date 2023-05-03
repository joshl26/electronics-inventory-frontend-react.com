import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import classes from "./SideBar.module.scss";
import { Col, Row, Container } from "react-bootstrap";

const SideBar = () => {
  const { username, isManager, isAdmin } = useAuth();

  const date = new Date();
  const today = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(date);

  const content = (
    <section className={classes.welcome}>
      <Col>
        <Row>
          <p className={classes.welcome_today_text}>{today}</p>
        </Row>
        <Row>
          <h1 className={classes.welcome_header_text}>Welcome {username}</h1>
        </Row>
        <Row>
          <Link to="/dash">
            <p className={classes.sidebar_links}> DashBoard</p>
          </Link>
        </Row>
        <Row>
          <Link to="/dash/parts">
            <p className="sidebar-links"> Electronics Inventory</p>
          </Link>
        </Row>
        <Row>
          <Link to="/dash/parts/new">
            <p className="sidebar-links"> Add Parts to Inventory</p>
          </Link>
        </Row>

        <Row>
          <Link to="/dash/notes">
            <p className="sidebar-links"> View Notes</p>
          </Link>
        </Row>
        <Row>
          <Link to="/dash/notes/new">
            <p className="sidebar-links"> Add new Notes</p>
          </Link>
        </Row>
        <Row>
          {(isManager || isAdmin) && (
            <Link to="/dash/users">
              <p className="sidebar-links">View User Settings</p>
            </Link>
          )}
        </Row>
        <Row>
          {(isManager || isAdmin) && (
            <Link to="/dash/users/new">
              <p className="sidebar-links"> Add new User</p>
            </Link>
          )}
        </Row>
      </Col>
    </section>
  );

  return content;
};

export default SideBar;
