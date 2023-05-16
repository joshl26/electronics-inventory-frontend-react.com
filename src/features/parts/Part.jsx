import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectPartById } from "./partsApiSlice";

import classes from "./Part.module.scss";

const Part = ({ partId }) => {
  // console.log(partId);
  const part = useSelector((state) => selectPartById(state, partId));
  // const pal = useSelector((state) => selectAllParts(state));

  const partImages = part.images.map((image, idx) => {
    return (
      <div key={idx}>
        <a href={image.url}>
          <img
            className={classes.partlist_image}
            src={image.url}
            alt="part_image"
          />
        </a>
      </div>
    );
  });

  // console.log(part);
  // console.log(pal);

  const navigate = useNavigate();

  if (part) {
    // const created = new Date(part.createdAt).toLocaleString("en-US", {
    //   day: "numeric",
    //   month: "long",
    // });

    // const updated = new Date(part.updatedAt).toLocaleString("en-US", {
    //   day: "numeric",
    //   month: "long",
    // });

    const handleEdit = () => navigate(`/dash/parts/${partId}`);

    return (
      <tr>
        <td>{part.name}</td>
        <td>{part.partType}</td>
        <td>{part.qty}</td>
        <td>{part.description}</td>
        {/* <td className="table__cell part__username">{part.username}</td> */}
        <td>{partImages}</td>
        {/* <td className="table__cell part__images">{updated}</td>
        <td className="table__cell part__created">{created}</td> */}
        <td>
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
