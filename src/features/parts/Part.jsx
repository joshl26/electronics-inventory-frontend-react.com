import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPartById } from "./partsApiSlice";
import "./PartsList.css";

const Part = ({ partId }) => {
  // console.log(partId);
  const part = useSelector((state) => selectPartById(state, partId));
  // const pal = useSelector((state) => selectAllParts(state));

  // const partImages = part.images.map((image, idx) => {
  //   return (
  //     <div key={idx}>
  //       <a href={image.url}>
  //         <img
  //           className={classes.partlist_image}
  //           src={image.url}
  //           alt="part_image"
  //         />
  //       </a>
  //     </div>
  //   );
  // });

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
      <tr onClick={() => handleEdit()} className="part-list-row">
        <td className="part-number">{part.partNumber}</td>
        <td className="part-name">{part.name}</td>
        <td className="part-type">{part.partType}</td>
        <td className="part-description">{part.description}</td>
        <td className="part-qty">{part.qty}</td>
        <td className="part-backqty">{part.backOrder}</td>
        <td className="part-edit">
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
