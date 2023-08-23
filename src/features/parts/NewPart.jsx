import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersApiSlice";
import NewPartForm from "./NewPartForm";
import partTypes from "../../mock_data/partTypes.js";

const NewPart = () => {
  const users = useSelector(selectAllUsers);

  if (!users?.length) return <p>Not Currently Available</p>;

  const content = <NewPartForm users={users} partTypes={partTypes} />;

  return content;
};

export default NewPart;
