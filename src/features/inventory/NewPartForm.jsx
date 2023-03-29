import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAddNewPartMutation } from "./partsApiSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { set } from "lodash";
import { FilePicker } from "../../components/FilePicker";

const NewPartForm = ({ users, partTypes }) => {
  const [addNewPart, { isLoading, isSuccess, isError, error }] =
    useAddNewPartMutation();

  const navigate = useNavigate();

  const [partType, setPartType] = useState("");
  const [qty, setQty] = useState(0);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [userId, setUserId] = useState(users[0].id);

  useEffect(() => {
    if (isSuccess) {
      setTitle("");
      setText("");
      setUserId("");
      setQty(0);
      setPartType("");
      navigate("/dash/inventory");
    }
  }, [isSuccess, navigate]);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onTextChanged = (e) => setText(e.target.value);
  const onQtyChanged = (e) => setQty(e.target.value);
  const onPartTypeChanged = (e) => setPartType(e.target.value);

  const canSave = [title, text, userId].every(Boolean) && !isLoading;

  const onSavePartClicked = async (e) => {
    e.preventDefault();
    if (canSave) {
      await addNewPart({ user: userId, title, text, qty, partType });
    }
  };

  const options = partTypes.map((types) => {
    return <option value={types}>{types}</option>;
  });

  const errClass = isError ? "errmsg" : "offscreen";
  const validTitleClass = !title ? "form__input--incomplete" : "";
  const validTextClass = !text ? "form__input--incomplete" : "";

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
        <label className="form__label" htmlFor="title">
          Part Name:
        </label>
        <input
          className={`form__input ${validTitleClass}`}
          id="title"
          name="title"
          type="text"
          autoComplete="off"
          value={title}
          onChange={onTitleChanged}
        />

        <label className="form__label" htmlFor="text">
          Description:
        </label>
        <textarea
          className={`form__input form__input--text ${validTextClass}`}
          id="text"
          name="text"
          value={text}
          onChange={onTextChanged}
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
