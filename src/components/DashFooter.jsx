import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "./DashFooter.scss";

const DashFooter = () => {
  const { username, status } = useAuth();

  const navigate = useNavigate();

  const content = (
    <footer className="dash-footer">
      <p className="dash-footer-paragraph">Current User: {username}</p>
      <p className="dash-footer-paragraph">Status: {status}</p>
    </footer>
  );
  return content;
};
export default DashFooter;
