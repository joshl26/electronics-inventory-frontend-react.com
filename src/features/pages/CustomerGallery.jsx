import { Container, Row, Col } from "react-bootstrap";
import "./CustomerGallery.scss";
import Visa from "../../svg/visa.svg";

const CustomerGallery = () => {
  return (
    <div className="customer-gallery">
      <Container>
        <div className="spacer"></div>
        <h1 className="customer-header-text">These companies trust Ei:</h1>
        <Row>
          <Col>
            <img className="customer-icon" src={Visa} />
          </Col>
          <Col>
            <img className="customer-icon" src={Visa} />
          </Col>
          <Col>
            <img className="customer-icon" src={Visa} />
          </Col>
        </Row>
        <Row>
          <Col>
            <img className="customer-icon" src={Visa} />
          </Col>
          <Col>
            <img className="customer-icon" src={Visa} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CustomerGallery;
