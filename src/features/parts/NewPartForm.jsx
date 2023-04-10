import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAddNewPartMutation } from "./partsApiSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
// import { set } from "lodash";
import { FilePicker } from "../../components/FilePicker";

const NewPartForm = ({ users, partTypes }) => {
  const [addNewPart, { isLoading, isSuccess, isError, error }] =
    useAddNewPartMutation();

  const navigate = useNavigate();

  const [partType, setPartType] = useState("None");
  const [qty, setQty] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [userId, setUserId] = useState(users[0].id);
  // const [updatedBy, setUpdatedBy] = useState(username);
  // const [updatedAt, setUpdatedAt] = useState(updated);
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

  useEffect(() => {
    if (isSuccess) {
      setName("");
      setDescription("");
      setUserId("");
      setQty(0);
      setPartType("None");
      navigate("/dash/parts");
    }
  }, [isSuccess, navigate]);

  const onNameChanged = (e) => setName(e.target.value);
  const onDescriptionChanged = (e) => setDescription(e.target.value);
  const onQtyChanged = (e) => setQty(e.target.value);
  const onPartTypeChanged = (e) => setPartType(e.target.value);

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

  const errClass = isError ? "errmsg" : "offscreen";
  const validNameClass = !name ? "form__input--incomplete" : "";
  const validDescriptionClass = !description ? "form__input--incomplete" : "";

  const content = (
    <div>
      <p className={errClass}>{error?.data?.message}</p>
      <form className="form" onSubmit={onSavePartClicked}>
        <div className="form__title-row">
          <h2>Add New Part</h2>
          <div className="form__action-buttons">
            <button className="icon-button" title="Defaults">
              <FontAwesomeIcon icon={faDeleteLeft} />
            </button>
            <button className="icon-button" title="Save" disabled={!canSave}>
              <FontAwesomeIcon icon={faSave} />
            </button>
          </div>
        </div>
        <label className="form__label" htmlFor="name">
          Part Name:
        </label>
        <input
          className={`form__input ${validNameClass}`}
          id="name"
          name="name"
          type="text"
          autoComplete="off"
          value={name}
          onChange={onNameChanged}
        />

        <label className="form__label" htmlFor="description">
          Description:
        </label>
        <textarea
          className={`form__input form__input--text ${validDescriptionClass}`}
          id="description"
          name="description"
          value={description}
          onChange={onDescriptionChanged}
        />

        <label className="form__label" htmlFor="qty">
          Qty:
        </label>
        <input
          min="0"
          max="10000"
          className="form__input"
          id="qty"
          name="qty"
          type="number"
          onChange={onQtyChanged}
          value={qty}
        />
        <label className="form__label" htmlFor="parttype">
          Part Type:
        </label>
        <select
          id="parttype"
          name="parttype"
          className="form__select"
          value={partType}
          onChange={onPartTypeChanged}
        >
          {options}
        </select>
        <FilePicker />
      </form>
    </div>
  );

  return content;
};

export default NewPartForm;
