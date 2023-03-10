import { Outlet } from "react-router-dom";
import DashHeader from "./DashHeader";
import DashFooter from "./DashFooter";
import { Container } from "react-bootstrap";
import "./DashLayout.scss";

const DashLayout = () => {
  return (
    <div>
      <DashHeader />
      <div className="dash-container">
        <Outlet />
        <div className="dash-main-container">
          <h1>Playground</h1>
        </div>
      </div>
      <DashFooter />
    </div>
  );
};
export default DashLayout;
