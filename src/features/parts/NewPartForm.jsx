import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAddNewPartMutation } from "./partsApiSlice";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSave, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
// import { set } from "lodash";
import useAuth from "../../hooks/useAuth";
import ImagePicker from "../../components/ImagePicker";
import { Row, Col } from "react-bootstrap";
import classes from "./NewPartForm.module.scss";

const NewPartForm = ({ users, partTypes }) => {
  // const { username, isManager, isAdmin } = useAuth();
  const { username } = useAuth();

  // const [addNewPart, { isLoading, isSuccess, isError, error }] =
  // useAddNewPartMutation();

  const [addNewPart, { isLoading, isSuccess }] = useAddNewPartMutation();

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [userId, setUserId] = useState(users[0].id);
  const [qty, setQty] = useState(0);
  const [partType, setPartType] = useState("None");
  const [createdBy, setCreatedBy] = useState(username);
  const [createdAt] = useState("Not Created Yet");
  const [editedBy] = useState("Not Edited Yet");
  const [editedAt] = useState("Not Edited Yet");
  const [images, setImages] = useState([]);
  // const [deletedImages, setDeletedImages] = useState([]);
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
  // const onImagesChanged = (e) => setImages(e.target.value);
  const onPartNumberChanged = (e) => setPartNumber(e.target.value);
  const onLotIdChanged = (e) => setLotId(e.target.value);
  const onSerialNumberChanged = (e) => setSerialNumber(e.target.value);
  const onManufacturerChanged = (e) => setManufacturer(e.target.value);
  const onMfgDateChanged = (e) => setMfgDate(e.target.value);
  const onBackorderQtyChanged = (e) => setBackOrder(e.target.value);
  const onVendorNameChanged = (e) => setVendorName(e.target.value);
  const onPackageTypeChanged = (e) => setPartPackage(e.target.value);
  const onLocationChanged = (e) => setPartLocation(e.target.value);
  const onCostChanged = (e) => setCost(e.target.value);

  // const canSave = [name, description, userId].every(Boolean) && !isLoading;

  const canSave = [name, partNumber, description].every(Boolean) && !isLoading;

  const onSavePartClicked = async (e) => {
    e.preventDefault();
    if (canSave) {
      await addNewPart({
        user: userId,
        name,
        description,
        qty,
        partType,
        createdBy,
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

  // const options = partTypes.map((types, idx) => {
  //   return (
  //     <option key={idx} value={types}>
  //       {types}
  //     </option>
  //   );
  // });

  // const errContent = error?.data?.message ?? "";

  // const errClass = isError ? "errmsg" : "offscreen";
  // const validNameClass = !name ? "form__input__incomplete" : "";
  // const validDescriptionClass = !description ? "form__input__incomplete" : "";

  // const [validated, setValidated] = useState(false);

  const [validated] = useState(false);

  // const handleSubmit = async (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);

  //   console.log("Part Name: " + `${name}`);
  //   console.log("Part Number: " + `${partNumber}`);
  //   console.log("Part Type: " + `${partType}`);
  //   console.log("Description: " + `${description}`);
  //   console.log("Stock Qty: " + `${qty}`);
  //   console.log("Backorder Qty: " + `${backOrder}`);
  //   console.log("Unit Cost: " + `${cost}`);
  //   console.log("Location: " + `${partLocation}`);
  //   console.log("Package Type: " + `${partPackage}`);
  //   console.log("LotId: " + `${lotId}`);
  //   console.log("Serial Number: " + `${serialNumber}`);
  //   console.log("Mfg Date: " + `${mfgDate}`);
  //   console.log("Manufacturer: " + `${manufacturer}`);
  //   console.log("Vendor: " + `${vendorName}`);
  //   console.log("Date created: " + `${createdAt}`);
  //   console.log("Created by: " + `${userId}`);
  //   console.log("Date edited: " + `${editedAt}`);
  //   console.log("Edited by: " + `${editedBy}`);
  //   console.log("Images: " + `${images}`);

  //   if (canSave) {
  //     await addNewPart({
  //       user: userId,
  //       name,
  //       partNumber,
  //       partType,
  //       description,
  //       qty,
  //       backOrder,
  //       cost,
  //       partLocation,
  //       partPackage,
  //       lotId,
  //       serialNumber,
  //       mfgDate,
  //       manufacturer,
  //       vendorName,
  //       images,
  //     });
  //   }
  // };

  const content = (
    <>
      {/* {partImages} */}
      {/* <ImagePicker images={images} setImages={setImages} /> */}

      {/* <Form noValidate validated={validated} onSubmit={handleSubmit}> */}

      <Form noValidate validated={validated} onSubmit={onSavePartClicked}>
        <Row className="mt-3 mb-3">
          <Form.Group as={Col} md="4" controlId="validationPartName">
            <Form.Label>Part Name</Form.Label>
            <Form.Control
              onChange={onNameChanged}
              name="partname"
              required
              type="text"
              placeholder="Part Name"
              defaultValue={name}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please choose a valid Part Name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationPartNumber">
            <Form.Label>Part Number</Form.Label>
            <Form.Control
              onChange={onPartNumberChanged}
              name="partnumber"
              required
              type="text"
              placeholder="Part Number"
              defaultValue={partNumber}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please choose a valid Part Number.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationPartType">
            <Form.Label>Part Type</Form.Label>
            <Form.Control
              onChange={onPartTypeChanged}
              name="parttype"
              type="text"
              placeholder="Part Type"
              defaultValue={partType}
            />
          </Form.Group>
        </Row>
        <Row className="mt-3 mb-3">
          <Form.Group as={Col} md="8" controlId="validationDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              onChange={onDescriptionChanged}
              name="description"
              type="text"
              placeholder="Description"
              defaultValue={description}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md="3" controlId="validationStockQty">
            <Form.Label>Stock Qty</Form.Label>
            <Form.Control
              name="stockqty"
              defaultValue={qty}
              onChange={onStockQtyChanged}
              min="0"
              max="10000"
              type="number"
              placeholder="Stock Qty"
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationBackorderQty">
            <Form.Label>Backorder Qty</Form.Label>
            <Form.Control
              onChange={onBackorderQtyChanged}
              defaultValue={backOrder}
              min="0"
              max="10000"
              type="number"
              placeholder="Backorder Qty"
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationBackorderQty">
            <Form.Label>Unit Cost</Form.Label>
            <Form.Control
              onChange={onCostChanged}
              defaultValue={cost}
              min="0.00"
              max="10000.00"
              step="0.01"
              type="number"
              placeholder="Backorder Qty"
            />
          </Form.Group>
        </Row>

        <Row className="mt-3 mb-3">
          <Form.Group as={Col} md="3" controlId="validationStockQty">
            <Form.Label>Location</Form.Label>
            <Form.Control
              onChange={onLocationChanged}
              defaultValue={partLocation}
              type="text"
              placeholder="Location"
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationBackorderQty">
            <Form.Label>Package Type</Form.Label>
            <Form.Control
              onChange={onPackageTypeChanged}
              defaultValue={partPackage}
              type="text"
              placeholder="Part Package"
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationBackorderQty">
            <Form.Label>Lot Id</Form.Label>
            <Form.Control
              onChange={onLotIdChanged}
              defaultValue={lotId}
              type="text"
              placeholder="Lot Id"
            />
          </Form.Group>
        </Row>

        <Row className="mt-3 mb-3">
          <Form.Group as={Col} md="3" controlId="validationStockQty">
            <Form.Label>S/N</Form.Label>
            <Form.Control
              defaultValue={serialNumber}
              onChange={onSerialNumberChanged}
              type="text"
              placeholder="Serial Number"
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationBackorderQty">
            <Form.Label>Mfg Date</Form.Label>
            <Form.Control
              onChange={onMfgDateChanged}
              defaultValue={mfgDate}
              type="date"
              placeholder=""
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationBackorderQty">
            <Form.Label>Manufacturer</Form.Label>
            <Form.Control
              onChange={onManufacturerChanged}
              defaultValue={manufacturer}
              type="text"
              placeholder="Manufacturer"
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationBackorderQty">
            <Form.Label>Vendor</Form.Label>
            <Form.Control
              onChange={onVendorNameChanged}
              defaultValue={vendorName}
              type="text"
              placeholder=""
            />
          </Form.Group>
        </Row>

        <Row className="mt-3 mb-3">
          <Form.Group as={Col} md="2" controlId="validationStockQty">
            <Form.Label>Date Created</Form.Label>
            <Form.Control
              readOnly={true}
              defaultValue={createdAt}
              type="text"
              placeholder=""
            />
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationBackorderQty">
            <Form.Label>Created By</Form.Label>
            <Form.Control defaultValue={createdBy} type="text" placeholder="" />
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationStockQty">
            <Form.Label>Date Edited</Form.Label>
            <Form.Control
              defaultValue={editedAt}
              onChange={onStockQtyChanged}
              type="text"
              placeholder=""
            />
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationBackorderQty">
            <Form.Label>Edited By</Form.Label>
            <Form.Control defaultValue={editedBy} type="text" placeholder="" />
          </Form.Group>
        </Row>

        {/* <Row className="mt-3 mb-3">
          <Form.Group as={Col} md="6" controlId="formFile" className="mb-3">
            <Form.Label>Add Part Images</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Row> */}

        {/* {partImages} */}

        <Button
          className={classes.icon_button}
          title="Save"
          onClick={onSavePartClicked}
          // type="submit"
          disabled={!canSave}
        >
          Save New Part
        </Button>
      </Form>
      <ImagePicker images={images} setImages={setImages} />
    </>
  );

  return content;
};

export default NewPartForm;
