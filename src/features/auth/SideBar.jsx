import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import classes from "./SideBar.module.scss";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

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
            <p className={classes.sidebar_links}> Electronics Inventory</p>
          </Link>
        </Row>
        <Row>
          <Link to="/dash/parts/new">
            <p className={classes.sidebar_links}> Add Parts to Inventory</p>
          </Link>
        </Row>

        <Row>
          <Link to="/dash/notes">
            <p className={classes.sidebar_links}> View Notes</p>
          </Link>
        </Row>
        <Row>
          <Link to="/dash/notes/new">
            <p className={classes.sidebar_links}> Add new Notes</p>
          </Link>
        </Row>
        <Row>
          {(isManager || isAdmin) && (
            <Link to="/dash/users">
              <p className={classes.sidebar_links}>View User Settings</p>
            </Link>
          )}
        </Row>
        <Row>
          {(isManager || isAdmin) && (
            <Link to="/dash/users/new">
              <p className={classes.sidebar_links}> Add new User</p>
            </Link>
          )}
        </Row>
      </Col>
    </section>
  );

  return content;
};

export default SideBar;
