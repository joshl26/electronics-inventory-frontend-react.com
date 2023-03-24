import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./SideBar.scss";

const SideBar = () => {
  const { username, isManager, isAdmin } = useAuth();

  const date = new Date();
  const today = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(date);

  const content = (
    <section className="welcome">
      <p className="welcome-today-text">{today}</p>
      <h1 className="welcome-header-text">Welcome {username}</h1>
      <Link to="/dash">
        <p className="sidebar-links"> DashBoard</p>
      </Link>
      <Link to="/dash/inventory">
        <p className="sidebar-links"> Electronics Inventory</p>
      </Link>
      <Link to="/dash/inventory/new">
        <p className="sidebar-links"> Add Parts to Inventory</p>
      </Link>
      <Link to="/dash/notes">
        <p className="sidebar-links"> View Notes</p>
      </Link>
      <Link to="/dash/notes/new">
        <p className="sidebar-links"> Add new Notes</p>
      </Link>
      {(isManager || isAdmin) && (
        <Link to="/dash/users">
          <p className="sidebar-links">View User Settings</p>
        </Link>
      )}
      {(isManager || isAdmin) && (
        <Link to="/dash/users/new">
          <p className="sidebar-links"> Add new User</p>
        </Link>
      )}
    </section>
  );

  return content;
};

export default SideBar;
