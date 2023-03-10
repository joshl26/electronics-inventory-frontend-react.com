import { Container, Row, Col } from "react-bootstrap";
import "./CustomerGallery.scss";
import Visa from "../../svg/visa.svg";
import Coinbase from "../../svg/coinbase.svg";
import Google from "../../svg/google.svg";
import GrandHyatt from "../../svg/grandhyatt.svg";
import JohnDeere from "../../svg/johndeere.svg";
// import Zoom from "../../svg/zoom.svg";

const CustomerGallery = () => {
  return (
    <div className="customer-gallery">
      <Container className="customer-gallery-container">
        <div className="spacer"></div>
        <h1 className="customer-header-text">These companies trust Ei:</h1>
        <Row>
          <Col>
            <img className="customer-icon" src={Visa} />
          </Col>
          <Col>
            <img className="customer-icon" src={Coinbase} />
          </Col>
          <Col>
            <img className="customer-icon" src={Google} />
          </Col>
        </Row>
        <Row>
          <Col>
            <img className="customer-icon" src={GrandHyatt} />
          </Col>
          <Col>
            <img className="customer-icon" src={JohnDeere} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CustomerGallery;
