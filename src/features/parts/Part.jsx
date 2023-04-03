import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectPartById } from "./partsApiSlice";

const Part = ({ partId }) => {
  // console.log(partId);
  const part = useSelector((state) => selectPartById(state, partId));
  // const pal = useSelector((state) => selectAllParts(state));

  // console.log(part);
  // console.log(pal);

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

    const handleEdit = () => navigate(`/dash/parts/${partId}`);

    return (
      <tr>
        <td className="table__cell part__name">{part.name}</td>
        <td className="table__cell part__description">{part.description}</td>
        <td className="table__cell part__qty">{part.qty}</td>
        <td className="table__cell part__type">{part.partType}</td>
        <td className="table__cell part__username">{part.username}</td>
        <td className="table__cell part__created">{created}</td>
        <td className="table__cell part__updated">{updated}</td>
        <td className="table__cell part__edit">
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
