import { Col, Container, Row } from "react-bootstrap";
import useAuth from "../hooks/useAuth";
import "./DashFooter.scss";

const DashFooter = () => {
  const { username, status } = useAuth();

  const content = (
    <footer className="dash-footer">
      <Row className="dash-footer-row">
        <Col>
          <p className="dash-footer-paragraph">User: {username}</p>
        </Col>
        <Col>
          <p className="dash-footer-paragraph">Role: {status}</p>
        </Col>
      </Row>
    </footer>
  );
  return content;
};
export default DashFooter;
