import React from "react";
import classes from "./PartCard.module.scss";
import { useSelector } from "react-redux";
import { selectPartById } from "../features/parts/partsApiSlice";

const PartCard = ({ partId }) => {
  const part = useSelector((state) => selectPartById(state, partId));

  const partImages = part.images.map((image, idx) => {
    return (
      <div key={idx}>
        <a href={image.url}>
          <img className={classes.partcard_image} src={image.url} />
        </a>
      </div>
    );
  });

  return (
    <div key={part._id} className={classes.partcard_container}>
      <p className={classes.partid_header}></p>
      <p className={classes.partid_text}>{part.id}</p>
      <h1 className={classes.partname_header}>Part Name</h1>
      <h1 className={classes.partname_text}>{part.name}</h1>
      <h2 className={classes.partdescription_header}>Description</h2>
      <h3 className={classes.partdescription_text}>{part.description}</h3>
      <h2 className={classes.partuser_header}>Creator</h2>
      <h3 className={classes.partuser_text}>{part.username}</h3>
      <h2 className={classes.partqty_header}>Qty</h2>
      <h3 className={classes.partqty_text}>{part.qty}</h3>
      <h2 className={classes.parttype_header}>Part Type</h2>
      <h3 className={classes.parttype_text}>{part.partType}</h3>
      <h2 className={classes.partcreated_header}>Date Created</h2>
      <h3 className={classes.partcreated_text}>{part.createdAt}</h3>
      <h2 className={classes.partupdated_header}>Date Updated</h2>
      <h3 className={classes.partupdated_text}>{part.updatedAt}</h3>
      <h2 className={classes.partlocation_header}>Location</h2>
      <h3 className={classes.partlocation_text}>{part.location}</h3>
      <h2 className={classes.partpackage_header}>Package</h2>
      <h3 className={classes.partpackage_text}>{part.package}</h3>
      {partImages}
    </div>
  );
};

export default PartCard;
