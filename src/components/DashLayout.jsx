import { Outlet } from "react-router-dom";
import DashHeader from "./DashHeader";
import DashFooter from "./DashFooter";
import { Container } from "react-bootstrap";
import "./DashLayout.scss";
import ReactGridLayout from "./ReactGridLayout";
import Welcome from "../features/auth/Welcome";

const DashLayout = () => {
  return (
    <div>
      <DashHeader />
      <div className="dash-container">
        <Outlet />
        <Welcome />
        <div className="dash-main-container">
          <ReactGridLayout />
        </div>
      </div>
      <DashFooter />
    </div>
  );
};
export default DashLayout;
