import { useState, useEffect } from "react";
import { useUpdatePartMutation, useDeletePartMutation } from "./partsApiSlice";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../hooks/useAuth";
import { FilePicker } from "../../components/FilePicker";

const EditPartForm = ({ part, users, partTypes }) => {
  const { isManager, isAdmin } = useAuth();

  const [updatePart, { isLoading, isSuccess, isError, error }] =
    useUpdatePartMutation();

  const [
    deletePart,
    { isSuccess: isDelSuccess, isError: isDelError, error: delerror },
  ] = useDeletePartMutation();

  const navigate = useNavigate();

  const [name, setName] = useState(part.name);
  const [description, setDescription] = useState(part.description);
  const [qty, setQty] = useState(part.qty);
  const [partType, setPartType] = useState(part.partType);
  // const [completed, setCompleted] = useState(part.completed);
  const [userId, setUserId] = useState(part.user);

  useEffect(() => {
    // console.log("Edit Part form UseEffect");
    // console.log(isLoading);
    // console.log(isSuccess);
    // console.log(error);

    if (isSuccess || isDelSuccess) {
      setName("");
      setDescription("");
      setUserId("");
      setQty(0);
      setPartType("");
      navigate("/dash/parts");
    }
  }, [isSuccess, isDelSuccess, navigate]);

  const onNameChanged = (e) => setName(e.target.value);
  const onDescriptionChanged = (e) => setDescription(e.target.value);
  const onQtyChanged = (e) => setQty(e.target.value);
  const onPartTypeChanged = (e) => setPartType(e.target.value);

  const canSave =
    [name, description, qty, partType, userId].every(Boolean) && !isLoading;

  const onSavePartClicked = async (e) => {
    if (canSave) {
      await updatePart({
        id: part.id,
        user: userId,
        name,
        description,
        qty,
        partType,
      });
    }
  };

  const onDeletePartClicked = async () => {
    await deletePart({ id: part.id });
  };

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

  const options = partTypes.map((types, idx) => {
    return (
      <option key={idx} value={types}>
        {types}
      </option>
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
    <>
      <p className={errClass}>{errContent}</p>

      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div className="form__title-row">
          <h2>Edit Part #{part.ticket}</h2>
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
        </div>
        <label className="form__label" htmlFor="note-title">
          Title:
        </label>
        <input
          className={`form__input ${validNameClass}`}
          id="note-title"
          name="name"
          type="text"
          autoComplete="off"
          value={name}
          onChange={onNameChanged}
        />

        <label className="form__label" htmlFor="note-text">
          Description:
        </label>
        <textarea
          className={`form__input form__input--text ${validDescriptionClass}`}
          id="note-text"
          name="description"
          value={description}
          onChange={onDescriptionChanged}
        />
        <div className="form__row">
          <div className="form__divider">
            <label
              className="form__label form__checkbox-container"
              htmlFor="note-username"
            >
              Creator:
            </label>
            {part.username}
          </div>
          <div className="form__divider">
            <p className="form__created">
              Created:
              <br />
              {created}
            </p>
            <p className="form__updated">
              Updated:
              <br />
              {updated}
            </p>
          </div>
        </div>
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
    </>
  );

  return content;
};

export default EditPartForm;
