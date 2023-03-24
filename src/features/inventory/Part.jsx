import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectPartById } from "./partsApiSlice";

const Part = ({ partId }) => {
  const part = useSelector((state) => selectPartById(state, partId));

  const navigate = useNavigate();

  if (part) {
    const created = new Date(part.createdAt).toLocaleString("en-US", {
      day: "numeric",
      month: "long",
    });

    const updated = new Date(part.updatedAt).toLocaleString("en-US", {
      day: "numeric",
      month: "long",
    });

    const handleEdit = () => navigate(`/dash/part/${partId}`);

    return (
      <tr className="table__row">
        <td className="table__cell part__status">
          {part.completed ? (
            <span className="part__status--completed">Completed</span>
          ) : (
            <span className="part__status--open">Open</span>
          )}
        </td>
        <td className="table__cell part__created">{created}</td>
        <td className="table__cell part__updated">{updated}</td>
        <td className="table__cell part__title">{part.title}</td>
        <td className="table__cell part__username">{part.username}</td>

        <td className="table__cell">
          <button className="icon-button table__button" onClick={handleEdit}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </td>
      </tr>
    );
  } else {
    return null;
  }
};

export default Part;
