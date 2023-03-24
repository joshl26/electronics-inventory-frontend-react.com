import str from "../../mock_data/parts.json";
import Part from "../inventory/Part";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./InventoryList.scss";

const InventoryList = () => {
  // const parts = JSON.stringify(str);

  console.log(str);

  const tableContent = str.map((part) => (
    // <Part key={part._id} noteId={part._id}>

    <tr className="table__row">
      <td className="table__cell">{part.part_name}</td>
      <td className="table__cell">{part.part_description}</td>
      <td className="table__cell">{part.stock_qty}</td>
      <td className="table__cell">{part.backorder_qty}</td>
      <td className="table__cell">{part.qty}</td>

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
          <th scope="col" className="table__th part__name">
            Part Name
          </th>
          <th scope="col" className="table__th part__description">
            Description
          </th>
          <th scope="col" className="table__th part__qty">
            Qty
          </th>
          <th scope="col" className="table__th part__backqty">
            Back Qty
          </th>
          <th scope="col" className="table__th part__owner">
            Created by
          </th>
          <th scope="col" className="table__th part__edit">
            Edit
          </th>
        </tr>
      </thead>
      <tbody>{tableContent}</tbody>
    </table>
  );
  return content;
};

export default InventoryList;
