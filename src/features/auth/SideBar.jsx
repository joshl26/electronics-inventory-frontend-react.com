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
      <p>
        <Link to="/dash/notes" />
        View Notes
      </p>
      <p>
        <Link to="/dash/notes/new" />
        Add new Notes
      </p>
      {(isManager || isAdmin) && (
        <p>
          <Link to="/dash/users" /> View User Settings
        </p>
      )}
      {(isManager || isAdmin) && (
        <p>
          <Link to="/dash/users/new" />
          Add new User
        </p>
      )}
    </section>
  );

  return content;
};

export default SideBar;
