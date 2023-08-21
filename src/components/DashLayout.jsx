import { Outlet } from "react-router-dom";
import DashHeader from "./DashHeader";
import DashFooter from "./DashFooter";
import SideBar from "../features/auth/SideBar";
import { Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./DashLayout.scss";

const DashLayout = () => {
  const [sidebarShown, setSideBarShown] = useState(false);

  useEffect(() => {}, [sidebarShown, setSideBarShown]);

  return (
    <div>
      <DashHeader />
      <div className="dash-container">
        <Row>
          {sidebarShown ? (
            <Col xs={2} md={2}>
              <SideBar sidebarShown={sidebarShown} />
              <button
                onClick={() => setSideBarShown(!sidebarShown)}
                className="sidebar-hide-btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <rect
                    width="28"
                    height="28"
                    fill="white"
                    fill-opacity="0.01"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.1573 16.6865C15.2661 16.7938 15.3524 16.9215 15.4113 17.0624C15.4703 17.2033 15.5006 17.3545 15.5006 17.5073C15.5006 17.66 15.4703 17.8112 15.4113 17.9521C15.3524 18.093 15.2661 18.2208 15.1573 18.328C14.9368 18.5457 14.6394 18.6677 14.3296 18.6677C14.0197 18.6677 13.7223 18.5457 13.5018 18.328L10.0426 14.898C9.92341 14.7798 9.82877 14.6391 9.76419 14.4842C9.69961 14.3292 9.66636 14.1629 9.66636 13.995C9.66636 13.8271 9.69961 13.6609 9.76419 13.5059C9.82877 13.3509 9.92341 13.2102 10.0426 13.092L13.4901 9.67369C13.7107 9.45568 14.0083 9.33341 14.3185 9.33341C14.6286 9.33341 14.9262 9.45568 15.1468 9.67369C15.2556 9.78093 15.3419 9.90871 15.4008 10.0496C15.4598 10.1905 15.4901 10.3417 15.4901 10.4944C15.4901 10.6472 15.4598 10.7984 15.4008 10.9393C15.3419 11.0802 15.2556 11.208 15.1468 11.3152L12.4425 13.995L15.1573 16.6865V16.6865Z"
                    fill="#6B778C"
                  />
                </svg>
              </button>
              {sidebarShown ? <DashFooter /> : ""}
            </Col>
          ) : (
            <Col xs={1} md={1}>
              <SideBar sidebarShown={sidebarShown} />
              <button
                onClick={() => setSideBarShown(!sidebarShown)}
                className="sidebar-hide-btn-hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <rect
                    width="28"
                    height="28"
                    fill="white"
                    fill-opacity="0.01"
                    rotate="180"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.1573 16.6865C15.2661 16.7938 15.3524 16.9215 15.4113 17.0624C15.4703 17.2033 15.5006 17.3545 15.5006 17.5073C15.5006 17.66 15.4703 17.8112 15.4113 17.9521C15.3524 18.093 15.2661 18.2208 15.1573 18.328C14.9368 18.5457 14.6394 18.6677 14.3296 18.6677C14.0197 18.6677 13.7223 18.5457 13.5018 18.328L10.0426 14.898C9.92341 14.7798 9.82877 14.6391 9.76419 14.4842C9.69961 14.3292 9.66636 14.1629 9.66636 13.995C9.66636 13.8271 9.69961 13.6609 9.76419 13.5059C9.82877 13.3509 9.92341 13.2102 10.0426 13.092L13.4901 9.67369C13.7107 9.45568 14.0083 9.33341 14.3185 9.33341C14.6286 9.33341 14.9262 9.45568 15.1468 9.67369C15.2556 9.78093 15.3419 9.90871 15.4008 10.0496C15.4598 10.1905 15.4901 10.3417 15.4901 10.4944C15.4901 10.6472 15.4598 10.7984 15.4008 10.9393C15.3419 11.0802 15.2556 11.208 15.1468 11.3152L12.4425 13.995L15.1573 16.6865V16.6865Z"
                    fill="#6B778C"
                  />
                </svg>
              </button>
            </Col>
          )}

          <Col xs={1} md={10}>
            <div className="dash-outlet-container">
              <Outlet />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default DashLayout;
