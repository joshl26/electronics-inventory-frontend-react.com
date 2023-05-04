import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAddNewPartMutation } from "./partsApiSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
// import { set } from "lodash";
import useAuth from "../../hooks/useAuth";
import ImagePicker from "../../components/ImagePicker";
import { Row, Col, Container, FormControl } from "react-bootstrap";
import classes from "./NewPartForm.module.scss";

const NewPartForm = ({ users, partTypes }) => {
  const { username, isManager, isAdmin } = useAuth();

  console.log(username);

  const [addNewPart, { isLoading, isSuccess, isError, error }] =
    useAddNewPartMutation();

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [userId, setUserId] = useState(users[0].id);
  const [qty, setQty] = useState(0);
  const [partType, setPartType] = useState("None");
  // const [updatedBy, setUpdatedBy] = useState(username);
  const [createdAt, setCreatedAt] = useState("None");
  const [images, setImages] = useState([]);
  const [partNumber, setPartNumber] = useState("None");
  const [lotId, setLotId] = useState("None");
  const [serialNumber, setSerialNumber] = useState("None");
  const [manufacturer, setManufacturer] = useState("None");
  const [mfgDate, setMfgDate] = useState("None");
  const [backOrder, setBackOrder] = useState(0);
  const [vendorName, setVendorName] = useState("None");
  const [partPackage, setPartPackage] = useState("None");
  const [partLocation, setPartLocation] = useState("None");
  const [cost, setCost] = useState(0.0);

  useEffect(() => {
    if (isSuccess) {
      setName("");
      setDescription("");
      setUserId("");
      setQty(0);
      setPartType("");
      setImages([]);
      setPartNumber("");
      setLotId("");
      setSerialNumber("");
      setManufacturer("");
      setMfgDate("");
      setBackOrder(0);
      setVendorName("");
      setPartPackage("");
      setPartLocation("");
      setCost(0.0);
      navigate("/dash/parts");
    }
  }, [isSuccess, navigate]);

  const onNameChanged = (e) => setName(e.target.value);
  const onDescriptionChanged = (e) => setDescription(e.target.value);
  const onStockQtyChanged = (e) => setQty(e.target.value);
  const onPartTypeChanged = (e) => setPartType(e.target.value);
  const onImagesChanged = (e) => setImages(e.target.value);
  const onPartNumberChanged = (e) => setPartNumber(e.target.value);
  const onLotIdChanged = (e) => setLotId(e.target.value);
  const onSerialNumberChanged = (e) => setSerialNumber(e.target.value);
  const onManufacturerChanged = (e) => setManufacturer(e.target.value);
  const onMfgDateChanged = (e) => setMfgDate(e.target.value);
  const onBackorderQtyChanged = (e) => setBackOrder(e.target.value);
  const onVendorName = (e) => setVendorName(e.target.value);
  const onPackageTypeChanged = (e) => setPartPackage(e.target.value);
  const onLocationChanged = (e) => setPartLocation(e.target.value);
  const onCostChanged = (e) => setCost(e.target.value);

  const canSave = [name, description, userId].every(Boolean) && !isLoading;

  const onSavePartClicked = async (e) => {
    e.preventDefault();
    if (canSave) {
      await addNewPart({
        user: userId,
        name,
        description,
        qty,
        partType,
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
        cost,
      });
    }
  };

  const options = partTypes.map((types, idx) => {
    return (
      <option key={idx} value={types}>
        {types}
      </option>
    );
  });

  const errContent = error?.data?.message ?? "";

  const errClass = isError ? "errmsg" : "offscreen";
  const validNameClass = !name ? "form__input__incomplete" : "";
  const validDescriptionClass = !description ? "form__input__incomplete" : "";

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const content = (
    <>
      <form className={classes.form}>
        <p className={errClass}>{errContent}</p>
        <h2 className={classes.header}>Create New Part in Inventory</h2>
        <div className={classes.form__action_buttons}>
          <button
            className={classes.icon_button}
            title="Save"
            onClick={onSavePartClicked}
            disabled={!canSave}
          >
            <FontAwesomeIcon icon={faSave} />
          </button>
        </div>
        <div>
          <div className={classes.partcard_container}>
            <Row>
              <Col>
                <Row>
                  <Col>
                    <label className={classes.partname_header}>
                      Part Name:
                    </label>
                  </Col>
                  <Col>
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
                    <h2 className={classes.partnumber_header}>Part Number:</h2>
                  </Col>
                  <Col>
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
                      htmlFor="parttype"
                    >
                      Part Type:
                    </label>
                    <select
                      id="parttype"
                      name="parttype"
                      className={classes.form__select}
                      value={partType}
                      onChange={onPartTypeChanged}
                    >
                      {options}
                    </select>
                  </Col>

                  {/* {part.images?.length !== 0 ? (
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
                    )} */}
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

            <Row>
              <Col>
                <h2 className={classes.partqty_header}>Stock Qty</h2>
                <input
                  id="stockqty"
                  name="stockqty"
                  type="number"
                  value={qty}
                  className={classes.partqty_text}
                  onChange={onStockQtyChanged}
                ></input>
              </Col>
              <Col>
                <h2 className={classes.partqty_header}>Backorder Qty</h2>
                <input
                  min="0"
                  max="10000"
                  id="backorder"
                  name="backorder"
                  type="number"
                  value={backOrder}
                  className={classes.partqty_text}
                  onChange={onBackorderQtyChanged}
                ></input>
              </Col>
              <Col className={classes.border}>
                <h2 className={`classes.partcreator_header ${classes.text}`}>
                  Unit Cost
                </h2>
                <input
                  min="0.00"
                  max="10000.00"
                  step="0.01"
                  value={cost}
                  id="cost"
                  name="cost"
                  type="number"
                  autoComplete="off"
                  onChange={onCostChanged}
                  className={classes.cost_text}
                ></input>
              </Col>
              <Col>
                <h2 className={classes.partlocation_header}>Location</h2>
                <input
                  id="location"
                  name="location"
                  type="text"
                  autoComplete="off"
                  value={partLocation}
                  onChange={onLocationChanged}
                  className={classes.partname_text}
                ></input>
              </Col>
              <Col>
                <h2 className={classes.partpackage_header}>Package Type</h2>
                <input
                  id="package"
                  name="package"
                  type="text"
                  autoComplete="off"
                  value={partPackage}
                  onChange={onPackageTypeChanged}
                  className={classes.partname_text}
                ></input>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2 className={classes.partupdated_header}>S/N</h2>
                <input
                  id="serialnumber"
                  name="serialnumber"
                  type="text"
                  autoComplete="off"
                  value={serialNumber}
                  onChange={onSerialNumberChanged}
                  className={classes.partname_text}
                ></input>
              </Col>
              <Col>
                <h2 className={classes.partupdated_header}>Lot ID</h2>
                <input
                  id="lotid"
                  name="lotid"
                  type="text"
                  autoComplete="off"
                  value={lotId}
                  onChange={onLotIdChanged}
                  className={classes.partname_text}
                ></input>
              </Col>
              <Col>
                <h2 className={classes.partupdated_header}>Mfg. Date</h2>
                <input
                  id="mfgdate"
                  name="mfgdate"
                  type="text"
                  autoComplete="off"
                  value={mfgDate}
                  onChange={onMfgDateChanged}
                  className={classes.partname_text}
                ></input>
              </Col>
              <Col>
                <h2 className={classes.partupdated_header}>Manufacturer</h2>
                <input
                  id="manufacturer"
                  name="manufacturer"
                  type="text"
                  autoComplete="off"
                  value={manufacturer}
                  onChange={onManufacturerChanged}
                  className={classes.partname_text}
                ></input>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2 className={classes.partcreated_header}>Date Created</h2>
                <h3 className={classes.partcreated_text}>{createdAt}</h3>
              </Col>
              <Col>
                <h2 className={classes.partcreator_header}>Creator</h2>
                <h3 className={classes.partcreator_text}>{username}</h3>
              </Col>
            </Row>
          </div>
          <div className={classes.spacer}></div>
        </div>
      </form>
      {/* {partImages} */}
      {/* <ImagePicker images={images} setImages={setImages} /> */}

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Part Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Part Name"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please choose a Part Name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomPartNumber">
            <Form.Label>Part Number</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Part Number"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please choose a Part Number.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Part Type</Form.Label>
            <InputGroup hasValidation>
              <Form.Control type="text" placeholder="Part Type" required />
              <Form.Control.Feedback type="invalid">
                Please choose a Part Type.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustomDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Description" />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustomStockQty">
            <Form.Label>Stock Qty</Form.Label>
            <Form.Control
              defaultValue="0"
              min="0"
              max="10000"
              type="number"
              placeholder="Stock Qty"
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustomBackorderQty">
            <Form.Label>Backorder Qty</Form.Label>
            <Form.Control
              defaultValue="0"
              min="0"
              max="10000"
              type="number"
              placeholder="Stock Qty"
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Add Part Images</Form.Label>
          <Form.Control type="file" />
        </Form.Group>

        <Button type="submit">Submit form</Button>
      </Form>
    </>
  );

  return content;
};

export default NewPartForm;
