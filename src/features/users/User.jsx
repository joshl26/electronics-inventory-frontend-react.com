import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUsersById } from "./usersApiSlice";
import { FaPenSquare } from "react-icons/fa";

const User = ({ userId }) => {
  const user = useSelector((state) => selectUsersById(state, userId));

  const navigate = useNavigate();

  if (user) {
    const handleEdit = () => navigate(`/dash/users/${userId}`);

    const userRoleString = user.roles.toString().replaceAll(",", ", ");

    const cellStatus = user.active ? "" : "table__cell--inactive";

    return (
      <tr onClick={() => handleEdit()} className="user-list-row">
        <td className={`${cellStatus}`}>{user.username}</td>
        <td className={`${cellStatus}`}>{userRoleString}</td>
        <td className={`${cellStatus}`}>
          <button className="icon-button table__button" onClick={handleEdit}>
            <FaPenSquare />
          </button>
        </td>
      </tr>
    );
  } else {
    return null;
  }
};

export default User;
