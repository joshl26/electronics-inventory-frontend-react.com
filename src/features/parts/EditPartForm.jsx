import { useState, useEffect } from "react";
import { useUpdatePartMutation, useDeletePartMutation } from "./partsApiSlice";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../hooks/useAuth";
import ImagePicker from "../../components/ImagePicker";
import { Row, Col } from "react-bootstrap";
import "./EditPartForm.css";
import Form from "react-bootstrap/Form";

const EditPartForm = ({ part, partTypes }) => {
  const { username, isManager, isAdmin } = useAuth();

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
  const [createdBy] = useState(part.createdBy);
  const [createdAt] = useState(created);
  const [updatedAt] = useState(updated);
  const [updatedBy, setUpdatedBy] = useState(username);
  const [images, setImages] = useState(part.images);
  const [newImages, setNewImages] = useState([]);
  const [deletedImages, setDeletedImages] = useState(part.deletedImages);
  const [partNumber, setPartNumber] = useState(part.partNumber);
  const [lotId, setLotId] = useState(part.lotId);
  const [serialNumber, setSerialNumber] = useState(part.serialNumber);
  const [manufacturer, setManufacturer] = useState(part.manufacturer);
  const [mfgDate, setMfgDate] = useState(part.mfgDate);
  const [backOrder, setBackOrder] = useState(part.backOrder);
  const [vendorName, setVendorName] = useState(part.vendorName);
  const [partPackage, setPartPackage] = useState(part.partPackage);
  const [partLocation, setPartLocation] = useState(part.partLocation);
  const [cost, setCost] = useState(part.cost);

  const [userId, setUserId] = useState(part.user);

  useEffect(() => {
    if (isSuccess || isDelSuccess) {
      setUserId("");
      setName("");
      setDescription("");
      setQty(0);
      setPartType("");
      setUpdatedBy("");
      setImages("");
      setNewImages("");
      setDeletedImages([]);
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
  }, [isSuccess, isDelSuccess, navigate, images, deletedImages]);

  const onNameChanged = (e) => setName(e.target.value);
  const onDescriptionChanged = (e) => setDescription(e.target.value);
  const onStockQtyChanged = (e) => setQty(e.target.value);
  const onPartTypeChanged = (e) => setPartType(e.target.value);
  const onPartNumberChanged = (e) => setPartNumber(e.target.value);
  const onBackorderQtyChanged = (e) => setBackOrder(e.target.value);
  const onLocationChanged = (e) => setPartLocation(e.target.value);
  const onPackageTypeChanged = (e) => setPartPackage(e.target.value);
  const onSerialNumberChanged = (e) => setSerialNumber(e.target.value);
  const onLotIdChanged = (e) => setLotId(e.target.value);
  const onMfgDateChanged = (e) => setMfgDate(e.target.value);
  const onManufacturerChanged = (e) => setManufacturer(e.target.value);
  const onCostChanged = (e) => setCost(e.target.value);
  const onVendorNameChanged = (e) => setVendorName(e.target.value);

  // const onNewImagesChanged = (e) => setNewImages(e.target.value);

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
        createdBy,
        backOrder,
        updatedBy,
        images,
        newImages,
        deletedImages,
        partNumber,
        lotId,
        serialNumber,
        manufacturer,
        mfgDate,
        vendorName,
        partPackage,
        partLocation,
        cost,
      });
      navigate(`/dash/parts`);
    }
  };

  const onDeletePartClicked = async (e) => {
    e.preventDefault();
    await deletePart({ id: part.id });
    navigate(`/dash/parts`);
  };

  const onImageDeleteClicked = async (e) => {
    e.preventDefault();
    console.log(e.target.getAttribute("name"));

    const fileName = e.target.getAttribute("name");

    const tag = {
      fileName: fileName,
    };
    setDeletedImages([...deletedImages, tag]);

    setImages(images.filter((image) => image.fileName !== fileName));
  };

  // const options = partTypes.map((types, idx) => {
  //   return (
  //     <option key={idx} value={types}>
  //       {types}
  //     </option>
  //   );
  // });

  const partImages = images.map((image, idx) => {
    return (
      <Col md={2} className="part-image" key={idx}>
        <Row>
          <a href="">
            <img alt="" className="part-image" src={image.url} />
          </a>
        </Row>
        <Row style={{ textAlign: "center" }}>
          <a href="/" onClick={onImageDeleteClicked}>
            <p name={image.fileName}>Delete</p>
          </a>
        </Row>
      </Col>
    );
  });

  // const errClass = isError || isDelError ? "errmsg" : "offscreen";

  const errContent = (error?.data?.message || delerror?.data?.message) ?? "";

  let deleteButton = null;
  if (isManager || isAdmin) {
    deleteButton = (
      <button
        className="icon-button"
        title="Delete"
        onClick={(e) => onDeletePartClicked(e)}
      >
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    );
  }

  const [validated] = useState(false);

  const content = (
    <>
      {errContent}
      {isError}
      {isDelError}
      <Form noValidate validated={validated} onSubmit={onSavePartClicked}>
        <h2>Edit Part in Inventory</h2>
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
          <Form.Group as={Col} md="4" controlId="validationPartNumber">
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
          <Form.Group as={Col} md="4" controlId="validationPartType">
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
          <Form.Group as={Col} md="12" controlId="validationDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              onChange={onDescriptionChanged}
              name="description"
              as="textarea"
              rows={4}
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
              defaultValue={updatedAt}
              onChange={onStockQtyChanged}
              type="text"
              placeholder=""
            />
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationBackorderQty">
            <Form.Label>Edited By</Form.Label>
            <Form.Control defaultValue={updatedBy} type="text" placeholder="" />
          </Form.Group>
        </Row>
      </Form>
      <div className="vh2-spacer"></div>
      <h4>Attach a file:</h4>
      <div className="vh2-spacer"></div>
      <ImagePicker images={images} setImages={setImages} />
      <div className="vh2-spacer"></div>
      <Row>{partImages}</Row>
      <div className="vh5-spacer"></div>
    </>
  );

  return content;
};

export default EditPartForm;
