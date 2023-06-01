import { Container, Row, Col } from "react-bootstrap";
import "./CustomerGallery.scss";
import ATI from "../../svg/ATI.svg";
import Apple from "../../svg/Apple.svg";
import HP from "../../svg/HP.svg";
import GM from "../../svg/GM.svg";
import Nvidia from "../../svg/Nvidia.svg";
import Burton from "../../svg/Burton.svg";

const CustomerGallery = () => {
  return (
    <div className="customer-gallery">
      <Container className="customer-gallery-container">
        <div className="spacer"></div>
        <h1 className="customer-header-text">These companies trust Ei:</h1>
        <Row>
          <Col>
            <img alt="visa_icon" className="customer-icon" src={Burton} />
          </Col>
          <Col>
            <img alt="coinbase_icon" className="customer-icon" src={Apple} />
          </Col>
          <Col>
            <img alt="google_icon" className="customer-icon" src={ATI} />
          </Col>
        </Row>
        <Row>
          <Col>
            <img alt="grandhyatt_icon" className="customer-icon" src={Nvidia} />
          </Col>
          <Col>
            <img alt="johndeers_icon" className="customer-icon" src={HP} />
          </Col>
          <Col>
            <img alt="zoom_icon" className="customer-icon" src={GM} />
          </Col>
        </Row>
        <div className="spacer-small"></div>
      </Container>
    </div>
  );
};

export default CustomerGallery;
