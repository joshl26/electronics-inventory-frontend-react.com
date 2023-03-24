import str from "../../mock_data/parts.json";
import Part from "../inventory/Part";

const InventoryList = () => {
  // const parts = JSON.stringify(str);

  console.log(str);

  const tableContent = str.map((part) => (
    <Part key={part._id} noteId={part._id}>
      <h1>{part.part_name}</h1>
    </Part>
  ));
  const content = (
    <table className="table table--notes">
      <thead className="table__thead">
        <tr>
          <th scope="col" className="table__th note__status">
            Username
          </th>
          <th scope="col" className="table__th note__created">
            Created
          </th>
          <th scope="col" className="table__th note__updated">
            Updated
          </th>
          <th scope="col" className="table__th note__title">
            Title
          </th>
          <th scope="col" className="table__th note__username">
            Owner
          </th>
          <th scope="col" className="table__th note__edit">
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
