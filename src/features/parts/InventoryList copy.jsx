import str from "../../mock_data/parts.json";
import Part from "./Part";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./InventoryList.scss";

const InventoryList = () => {
  // const parts = JSON.stringify(str);

  console.log(str);

  const tableContent = Part.map((part, idx) => (
    // <Part key={part._id} noteId={part._id}>

    <tr key={idx} className="table__row">
      <td className="table__cell">{part.partname}</td>
      <td className="table__cell">{part.description}</td>
      <td className="table__cell">{part.stock_qty}</td>
      <td className="table__cell">{part.back_qty}</td>
      <td className="table__cell">{part.username}</td>

      <td className="table__cell">
        <button className="icon-button table__button">
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
      </td>
    </tr>

    // </Part>
  ));
  const content = (
    <table className="table table--notes">
      <thead className="table__thead">
        <tr>
          <th scope="col" className="table__th">
            Part Name
          </th>
          <th scope="col" className="table__th">
            Description
          </th>
          <th scope="col" className="table__th">
            Qty
          </th>
          <th scope="col" className="table__th">
            Back Qty
          </th>
          <th scope="col" className="table__th">
            Created by
          </th>
          <th scope="col" className="table__th">
            Edit
          </th>
        </tr>
      </thead>
      <tbody className="table__row">{tableContent}</tbody>
    </table>
  );
  return content;
};

export default InventoryList;
