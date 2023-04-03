import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPartById } from "./partsApiSlice";
import { selectAllUsers } from "../users/usersApiSlice";
import EditPartForm from "./EditPartForm";

const EditPart = () => {
  const partTypes = [
    "None",
    "Resistor",
    "Capacitor",
    "Inductors",
    "Diodes",
    "LED",
    "Transistors",
    "Crystals",
    "Oscillators",
    "Relays",
    "Switches",
  ];

  const { id } = useParams();

  const part = useSelector((state) => selectPartById(state, id));
  const users = useSelector(selectAllUsers);

  const content =
    part && users ? (
      <EditPartForm part={part} users={users} partTypes={partTypes} />
    ) : (
      <p>Loading...</p>
    );

  return content;
};

export default EditPart;
