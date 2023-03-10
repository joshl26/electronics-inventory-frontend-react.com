import { Outlet } from "react-router-dom";
import DashHeader from "./DashHeader";
import DashFooter from "./DashFooter";
import { Container } from "react-bootstrap";
import "./DashLayout.scss";
import Cards from "./Cards";

const DashLayout = () => {
  return (
    <div>
      <DashHeader />
      <div className="dash-container">
        <Outlet />
        <div className="dash-main-container">
          <Cards />
        </div>
      </div>
      <DashFooter />
    </div>
  );
};
export default DashLayout;
