import { Outlet } from "react-router-dom";
import DashHeader from "./DashHeader";
import DashFooter from "./DashFooter";
import "./DashLayout.scss";
import SideBar from "../features/auth/SideBar";
import { Col, Row } from "react-bootstrap";

const DashLayout = () => {
  return (
    <div>
      <DashHeader />
      <div className="dash-container">
        <Row>
          <Col xs={2} md={2}>
            <div className="dash-sidebar-container">
              <SideBar />
            </div>
          </Col>
          <Col xs={2} md={10}>
            <div className="dash-outlet-container">
              <Outlet />
            </div>
          </Col>
        </Row>
        <div className="spacer"></div>
      </div>
      <DashFooter />
    </div>
  );
};
export default DashLayout;
