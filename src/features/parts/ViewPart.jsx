import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPartById } from "./partsApiSlice";
import { selectAllUsers } from "../users/usersApiSlice";
import EditPartForm from "./EditPartForm";
import partTypes from "../../mock_data/partTypes";

const ViewPart = () => {
  const { id } = useParams();

  const part = useSelector((state) => selectPartById(state, id));
  const users = useSelector(selectAllUsers);

  const content =
    part && users ? (
      <EditPartForm
        idReadOnly={true}
        part={part}
        users={users}
        partTypes={partTypes}
      />
    ) : (
      <p>Loading...</p>
    );

  return content;
};

export default ViewPart;
