import useAuth from "../hooks/useAuth";
import "./DashFooter.scss";

const DashFooter = () => {
  const { username, status } = useAuth();

  const content = (
    <footer className="dash-footer">
      <p className="dash-footer-paragraph">User: {username}</p>
      <p className="dash-footer-paragraph">Role: {status}</p>
    </footer>
  );
  return content;
};
export default DashFooter;
