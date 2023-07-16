import { Container, Row, Col } from "react-bootstrap";
import "./CustomerGallery.scss";
import Apple from "../../svg/Apple.svg";
import HP from "../../svg/HP.svg";
import GM from "../../svg/GM.svg";
import Nvidia from "../../svg/Nvidia.svg";

const CustomerGallery = () => {
  return (
    <div className="customer-gallery">
      <Container className="customer-gallery-container">
        <div className="spacer"></div>
        <h1 className="customer-header-text">These companies trust Ei:</h1>
        <div className="spacer-small"></div>
        <Row>
          <Col xs={12} sm={12} md={4} lg={4}>
            <img
              alt="burton"
              className="customer-icon"
              src="https://res.cloudinary.com/dv6keahg3/image/upload/v1689541687/ElectronicsInventory/frontend_ui_images/Burton_tggtot.svg"
            />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <img
              alt="apple"
              className="customer-icon"
              src="https://res.cloudinary.com/dv6keahg3/image/upload/v1689541687/ElectronicsInventory/frontend_ui_images/Apple_c7d7om.svg"
            />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <img
              alt="ati"
              className="customer-icon"
              src="https://res.cloudinary.com/dv6keahg3/image/upload/v1689541687/ElectronicsInventory/frontend_ui_images/ATI_byzzxj.svg"
            />
          </Col>
        </Row>
        <div className="spacer-small"></div>
        <Row>
          <Col xs={12} sm={12} md={4} lg={4}>
            <img
              alt="nvidia"
              className="customer-icon"
              src="https://res.cloudinary.com/dv6keahg3/image/upload/v1689541690/ElectronicsInventory/frontend_ui_images/Nvidia_kkm9dn.svg"
            />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <img
              alt="hp"
              className="customer-icon"
              src="https://res.cloudinary.com/dv6keahg3/image/upload/v1689541689/ElectronicsInventory/frontend_ui_images/HP_xfdwmf.svg"
            />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <img
              alt="gm"
              className="customer-icon"
              src="https://res.cloudinary.com/dv6keahg3/image/upload/v1689541688/ElectronicsInventory/frontend_ui_images/GM_gyjz8x.svg"
            />
          </Col>
        </Row>
        <div className="spacer-small"></div>
      </Container>
    </div>
  );
};

export default CustomerGallery;
