import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersApiSlice";
import NewPartForm from "./NewPartForm";

const NewPart = () => {
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

  const users = useSelector(selectAllUsers);

  if (!users?.length) return <p>Not Currently Available</p>;

  const content = <NewPartForm users={users} partTypes={partTypes} />;

  return content;
};

export default NewPart;
