import { useState, useEffect } from "react";
import { useUpdatePartMutation, useDeletePartMutation } from "./partsApiSlice";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaBackspace,
  FaBackward,
  FaEdit,
  FaSave,
  FaTrash,
} from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import useAuth from "../../hooks/useAuth";
import ImagePicker from "../../components/ImagePicker";
import "./EditPartForm.css";

const EditPartForm = ({ part, idReadOnly }) => {
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
    console.log(idReadOnly);

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
  }, [isSuccess, isDelSuccess, navigate, images, deletedImages, idReadOnly]);

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

  const onBackClicked = async (e) => {
    e.preventDefault();
    navigate(`/dash/parts`);
  };

  const onViewClicked = async (e) => {
    e.preventDefault();
    navigate(`/dash/parts/${part.id}`);
  };

  const onEditPartClicked = async (e) => {
    e.preventDefault();
    navigate(`/dash/parts/${part.id}/edit`);
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
        title="Delete Part"
        onClick={(e) => onDeletePartClicked(e)}
      >
        <FaTrash />
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
        <h2>{idReadOnly ? "View" : "Edit"} Part Details</h2>
        <div className="form__action-buttons">
          {idReadOnly ? (
            <button
              className="icon-button-left"
              title="Back to parts list"
              onClick={onBackClicked}
            >
              <FaArrowLeft />
            </button>
          ) : (
            <button
              className="icon-button-left"
              title="View Part Details"
              onClick={onViewClicked}
            >
              <FaArrowLeft />
            </button>
          )}

          {idReadOnly ? (
            <button
              className="icon-button"
              title="Edit Part Details"
              onClick={onEditPartClicked}
              disabled={!canSave}
            >
              <FaEdit />
            </button>
          ) : (
            <>
              <button
                className="icon-button"
                title="Save Part"
                onClick={onSavePartClicked}
                disabled={!canSave}
              >
                <FaSave />
              </button>{" "}
              {deleteButton}
            </>
          )}
        </div>

        <Row className="mt-3 mb-3">
          <Form.Group as={Col} md="4" controlId="validationPartName">
            <Form.Label>Part Name</Form.Label>
            <Form.Control
              readOnly={idReadOnly}
              onChange={onNameChanged}
              name="partname"
              required
              type="text"
              placeholder="Part Name"
              defaultValue={name}
              title="Part Name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please choose a valid Part Name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationPartNumber">
            <Form.Label>Part Number</Form.Label>
            <Form.Control
              readOnly={idReadOnly}
              onChange={onPartNumberChanged}
              name="partnumber"
              required
              type="text"
              placeholder="Part Number"
              defaultValue={partNumber}
              title="Part Number"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please choose a valid Part Number.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationPartType">
            <Form.Label>Part Type</Form.Label>
            <Form.Control
              title="Part Type"
              readOnly={idReadOnly}
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
              readOnly={idReadOnly}
              onChange={onDescriptionChanged}
              name="description"
              as="textarea"
              rows={4}
              placeholder="Description"
              defaultValue={description}
              title="Part Description"
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md="3" controlId="validationStockQty">
            <Form.Label>Stock Qty</Form.Label>
            <Form.Control
              readOnly={idReadOnly}
              name="stockqty"
              defaultValue={qty}
              onChange={onStockQtyChanged}
              min="0"
              max="10000"
              type="number"
              placeholder="Stock Qty"
              title="Stock Qty"
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationBackorderQty">
            <Form.Label>Backorder Qty (B/O)</Form.Label>
            <Form.Control
              readOnly={idReadOnly}
              onChange={onBackorderQtyChanged}
              defaultValue={backOrder}
              min="0"
              max="10000"
              type="number"
              placeholder="Backorder Qty"
              title="Backorder Qty"
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationBackorderQty">
            <Form.Label>Unit Cost</Form.Label>
            <Form.Control
              readOnly={idReadOnly}
              onChange={onCostChanged}
              defaultValue={cost}
              min="0.00"
              max="10000.00"
              step="0.01"
              type="number"
              placeholder="Unit Cost"
              title="Unit Cost"
            />
          </Form.Group>
        </Row>

        <Row className="mt-3 mb-3">
          <Form.Group as={Col} md="3" controlId="validationStockQty">
            <Form.Label>Location</Form.Label>
            <Form.Control
              readOnly={idReadOnly}
              onChange={onLocationChanged}
              defaultValue={partLocation}
              type="text"
              placeholder="Location"
              title="Location"
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationBackorderQty">
            <Form.Label>Package Type</Form.Label>
            <Form.Control
              readOnly={idReadOnly}
              onChange={onPackageTypeChanged}
              defaultValue={partPackage}
              type="text"
              placeholder="Part Package"
              title="Part Package"
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationBackorderQty">
            <Form.Label>Lot Id</Form.Label>
            <Form.Control
              readOnly={idReadOnly}
              onChange={onLotIdChanged}
              defaultValue={lotId}
              type="text"
              placeholder="Lot Id"
              title="Lot Id"
            />
          </Form.Group>
        </Row>

        <Row className="mt-3 mb-3">
          <Form.Group as={Col} md="3" controlId="validationStockQty">
            <Form.Label>Serial Number (S/N)</Form.Label>
            <Form.Control
              readOnly={idReadOnly}
              defaultValue={serialNumber}
              onChange={onSerialNumberChanged}
              type="text"
              placeholder="Serial Number"
              title="Serial Number"
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationBackorderQty">
            <Form.Label>Manufacturing Date</Form.Label>
            <Form.Control
              readOnly={idReadOnly}
              onChange={onMfgDateChanged}
              defaultValue={mfgDate}
              type="date"
              placeholder="Mfg Date"
              title="Mfg Date"
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationBackorderQty">
            <Form.Label>Manufacturer</Form.Label>
            <Form.Control
              readOnly={idReadOnly}
              onChange={onManufacturerChanged}
              defaultValue={manufacturer}
              type="text"
              placeholder="Manufacturer"
              title="Manufacturer"
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationBackorderQty">
            <Form.Label>Vendor</Form.Label>
            <Form.Control
              readOnly={idReadOnly}
              onChange={onVendorNameChanged}
              defaultValue={vendorName}
              type="text"
              placeholder="Vendor"
              title="Vendor"
            />
          </Form.Group>
        </Row>

        <Row className="mt-3 mb-3">
          <Form.Group as={Col} md="2" controlId="validationStockQty">
            <Form.Label>Date Created</Form.Label>
            <Form.Control
              readOnly
              defaultValue={createdAt}
              type="text"
              placeholder="Date Created"
              title="Date Created"
            />
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationBackorderQty">
            <Form.Label>Created By</Form.Label>
            <Form.Control
              readOnly
              defaultValue={createdBy}
              type="text"
              placeholder="Created By"
              title="Created By"
            />
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationStockQty">
            <Form.Label>Date Edited</Form.Label>
            <Form.Control
              readOnly
              defaultValue={updatedAt}
              onChange={onStockQtyChanged}
              type="text"
              placeholder="Date Edited"
              title="Date Edited"
            />
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationBackorderQty">
            <Form.Label>Edited By</Form.Label>
            <Form.Control
              readOnly
              defaultValue={updatedBy}
              type="text"
              placeholder="Updated By"
              title="Updated By"
            />
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
