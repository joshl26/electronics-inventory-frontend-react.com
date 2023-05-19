import { Outlet } from "react-router-dom";
import DashHeader from "./DashHeader";
import DashFooter from "./DashFooter";
import "./DashLayout.scss";
import SideBar from "../features/auth/SideBar";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCirclePlus,
  faFilePen,
  faUserGear,
  faUserPlus,
  faRightFromBracket,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

const DashLayout = () => {
  const [sidebarShown, setSideBarShown] = useState(true);

  return (
    <div>
      <DashHeader />
      <div className="dash-container">
        <Row>
          <button title="New User">
            <FontAwesomeIcon icon={faUserPlus} />
          </button>
          {sidebarShown ? (
            <Col xs={2} md={2} onClick={() => setSideBarShown(!sidebarShown)}>
              <div className="dash-sidebar-container">
                <SideBar />
              </div>
            </Col>
          ) : (
            <Col xs={2} md={2} onClick={() => setSideBarShown(!sidebarShown)}>
              <div className="dash-sidebar-container-minimized"></div>
            </Col>
          )}

          <Col xs={2} md={10}>
            <div className="dash-outlet-container">
              <Outlet />
            </div>
          </Col>
        </Row>
        <div className="spacer"></div>
      </div>
      {sidebarShown ? <DashFooter /> : ""}
    </div>
  );
};
export default DashLayout;
