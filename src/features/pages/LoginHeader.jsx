import "./LoginHeader.css";
import { Link } from "react-router-dom";

const LoginHeader = () => {
  return (
    <div className="header_container">
      <h1 className="header_text">Electronics Inventory</h1>
      <Link to="/login">Employee Login</Link>
    </div>
  );
};

export default LoginHeader;
