import { useState, useEffect } from "react";
import { useUpdatePartMutation, useDeletePartMutation } from "./partsApiSlice";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../hooks/useAuth";
import { FilePicker } from "../../components/FilePicker";
import { Row, Col, Container } from "react-bootstrap";

import classes from "./EditPartForm.module.scss";

const EditPartForm = ({ part, users, partTypes }) => {
  const { username, isManager, isAdmin } = useAuth();

  // const handleEdit = (e) => {
  //   e.preventDefault();
  //   navigate(`/dash/parts/${part._id}`);
  // };

  // const expandCard = (e) => {
  //   e.preventDefault();
  //   setExpand(!expand);
  // };

  const imageContent = part.images.map((image) => (
    <Col key={image._id}>
      <div key={image._id}>
        <a href={image.url}>
          <img className={classes.partcard_image} src={image.url} />
        </a>
      </div>
    </Col>
  ));

  const shortDescription =
    part.description.split(/\s+/).slice(0, 34).join(" ") + "...";

  console.log(part);

  const [updatePart, { isLoading, isSuccess, isError, error }] =
    useUpdatePartMutation();

  const [
    deletePart,
    { isSuccess: isDelSuccess, isError: isDelError, error: delerror },
  ] = useDeletePartMutation();

  const navigate = useNavigate();

  const created = new Date(part.createdAt).toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  const updated = new Date(part.updatedAt).toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  const [name, setName] = useState(part.name);
  const [description, setDescription] = useState(part.description);
  const [qty, setQty] = useState(part.qty);
  const [partType, setPartType] = useState(part.partType);
  const [updatedBy, setUpdatedBy] = useState(username);
  const [updatedAt, setUpdatedAt] = useState(updated);
  const [images, setImages] = useState(part.images);
  const [partNumber, setPartNumber] = useState(part.partNumber);
  const [lotId, setLotId] = useState(part.lotId);
  const [serialNumber, setSerialNumber] = useState(part.serialNumber);
  const [manufacturer, setManufacturer] = useState(part.manufacturer);
  const [mfgDate, setMfgDate] = useState(part.serialNumber);
  const [backOrder, setBackOrder] = useState(part.backOrder);
  const [vendorName, setVendorName] = useState(part.vendorName);
  const [partPackage, setPartPackage] = useState(part.partPackage);
  const [partLocation, setPartLocation] = useState(part.serialNumber);

  // const [partImages, setPartImages] = useState(part.images);

  // const [completed, setCompleted] = useState(part.completed);
  const [userId, setUserId] = useState(part.user);

  useEffect(() => {
    // console.log("Edit Part form UseEffect");
    // console.log(isLoading);
    // console.log(isSuccess);
    // console.log(error);

    if (isSuccess || isDelSuccess) {
      setUserId("");
      setName("");
      setDescription("");
      setQty(0);
      setPartType("");
      setUpdatedBy("");
      setUpdatedAt("");
      setImages("");
      setPartNumber("");
      setLotId("");
      setSerialNumber("");
      setManufacturer("");
      setMfgDate("");
      setBackOrder(0);
      setVendorName("");
      setPartPackage("");
      setPartLocation("");
      navigate("/dash/parts");
    }
  }, [isSuccess, isDelSuccess, navigate]);

  const onNameChanged = (e) => setName(e.target.value);
  const onDescriptionChanged = (e) => setDescription(e.target.value);
  const onQtyChanged = (e) => setQty(e.target.value);
  const onPartTypeChanged = (e) => setPartType(e.target.value);
  const onPartNumberChanged = (e) => setPartNumber(e.target.value);

  const canSave = [name, description, userId].every(Boolean) && !isLoading;

  const onSavePartClicked = async (e) => {
    e.preventDefault();
    if (canSave) {
      await updatePart({
        id: part.id,
        user: userId,
        name,
        description,
        qty,
        partType,
        updatedAt,
        updatedBy,
        images,
        partNumber,
        lotId,
        serialNumber,
        manufacturer,
        mfgDate,
        backOrder,
        vendorName,
        partPackage,
        partLocation,
      });
      navigate(`/dash/parts`);
    }
  };

  const onDeletePartClicked = async () => {
    await deletePart({ id: part.id });
    navigate(`/dash/parts/`);
  };

  const onImageDeleteClicked = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const options = partTypes.map((types, idx) => {
    return (
      <option key={idx} value={types}>
        {types}
      </option>
    );
  });

  const partImages = part.images.map((image, idx) => {
    return (
      <div key={idx}>
        <img className={classes.part_image} src={image.url} />
        <a href="" onClick={(e) => onImageDeleteClicked(e)}>
          <p>Delete</p>
        </a>
      </div>
    );
  });

  const errClass = isError || isDelError ? "errmsg" : "offscreen";
  const validNameClass = !name ? "form__input--incomplete" : "";
  const validDescriptionClass = !description ? "form__input--incomplete" : "";

  const errContent = (error?.data?.message || delerror?.data?.message) ?? "";

  let deleteButton = null;
  if (isManager || isAdmin) {
    deleteButton = (
      <button
        className="icon-button"
        title="Delete"
        onClick={onDeletePartClicked}
      >
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    );
  }

  const content = (
    <form>
      <p className={errClass}>{errContent}</p>
      <h2>Edit Part #{part.ticket2}</h2>
      <div className="form__action-buttons">
        <button
          className="icon-button"
          title="Save"
          onClick={onSavePartClicked}
          disabled={!canSave}
        >
          <FontAwesomeIcon icon={faSave} />
        </button>
        {deleteButton}
      </div>
      <div key={part._id}>
        <div className={classes.partcard_container}>
          <Container>
            <Row>
              <Col>
                <Row>
                  <Col>
                    <h2 className={classes.partname_header}>Part Name:</h2>
                  </Col>
                  <Col>
                    <label htmlFor="name" />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="off"
                      value={name}
                      onChange={onNameChanged}
                      className={classes.partname_text}
                    ></input>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h2 className={classes.parttype_header}>Part Number:</h2>
                  </Col>
                  <Col>
                    <label htmlFor="partNumber" />
                    <input
                      id="partNumber"
                      name="partNUmber"
                      type="text"
                      autoComplete="off"
                      value={partNumber}
                      onChange={onPartNumberChanged}
                      className={classes.parttype_text}
                    ></input>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <label
                      className={classes.parttype_header}
                      htmlFor="note-username"
                    >
                      Part Type:
                    </label>
                    <select
                      id="note-username"
                      name="username"
                      className="form__select"
                      value={partType}
                      onChange={onPartTypeChanged}
                    >
                      {options}
                    </select>

                    <h2 className={classes.parttype_text}>{part.partType}</h2>
                  </Col>

                  {part.images?.length !== 0 ? (
                    [imageContent]
                  ) : (
                    <>
                      <Col>
                        <p className={classes.text}>No Images</p>
                      </Col>
                      <Col>
                        <p className={classes.text}>No Images</p>
                      </Col>
                    </>
                  )}
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <textarea
                  className={classes.partdescription_text}
                  id="description"
                  name="description"
                  type="text"
                  autoComplete="off"
                  value={description}
                  onChange={onDescriptionChanged}
                />
              </Col>
            </Row>

            <>
              <Row>
                <Col>
                  <h2 className={classes.partqty_header}>Stock Qty</h2>
                  <input
                    value={part.qty}
                    className={classes.partqty_text}
                  ></input>
                </Col>
                <Col>
                  <h2 className={classes.partqty_header}>Backorder Qty</h2>
                  <h3 className={classes.partqty_text}>{part.backOrder}</h3>
                </Col>
                <Col>
                  <h2 className={classes.partlocation_header}>Location</h2>
                  <h3 className={classes.partlocation_text}>
                    {part.partLocation}
                  </h3>
                </Col>
                <Col>
                  <h2 className={classes.partpackage_header}>Package Type</h2>
                  <h3 className={classes.partpackage_text}>
                    {part.partPackage}
                  </h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h2 className={classes.partupdated_header}>S/N</h2>
                  <h3 className={classes.partupdated_text}>
                    {part.serialNumber}
                  </h3>
                </Col>
                <Col>
                  <h2 className={classes.partupdated_header}>Lot ID</h2>
                  <h3 className={classes.partupdated_text}>{part.lotId}</h3>
                </Col>
                <Col>
                  <h2 className={classes.partupdated_header}>Mfg. Date</h2>
                  <h3 className={classes.partupdated_text}>{part.mfgDate}</h3>
                </Col>
                <Col>
                  <h2 className={classes.partupdated_header}>Manufacturer</h2>
                  <h3 className={classes.partupdated_text}>
                    {part.manufacturer}
                  </h3>
                </Col>
                {part.vendor ? (
                  <Col>
                    <h2 className={classes.partupdated_header}>Vendor</h2>
                    <h3 className={classes.partupdated_text}>
                      {part.vendor.vendorName}
                    </h3>
                  </Col>
                ) : (
                  ""
                )}
              </Row>
              <Row>
                <Col>
                  <h2 className={classes.partupdated_header}>Last Updated</h2>
                  <h3 className={classes.partupdated_text}>{updated}</h3>
                </Col>
                <Col>
                  <h2 className={classes.partupdated_header}>Updated By</h2>
                  <h3 className={classes.partupdated_text}>{part.updatedBy}</h3>
                </Col>
                <Col>
                  <h2 className={classes.partcreated_header}>Date Created</h2>
                  <h3 className={classes.partcreated_text}>{created}</h3>
                </Col>
                <Col>
                  <h2 className={classes.partcreator_header}>Creator</h2>
                  <h3 className={classes.partcreator_text}>{part.user}</h3>
                </Col>
              </Row>
            </>
          </Container>
        </div>
        <div className={classes.spacer}></div>
      </div>
    </form>
  );

  return content;
};

export default EditPartForm;
