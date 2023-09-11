/* eslint-disable react/prop-types */
import { useEffect, useReducer, useState } from "react";
import classes from "./AddressBookEntryViewModal.module.css";
import {
  ACTION_EDIT_ENTRY,
  useAddressBookContext,
} from "../AddressBookProvider/AddressBookProvider";

const initialState = {
  firstName: "",
  lastName: "",
  city: "",
  country: "",
  isDisabled: true,
};
function reducer(state, action) {
  switch (action.type) {
    case "changeValue":
      return { ...state, [action.field]: action.value };
    case "isDisabled":
      return { ...state, isDisabled: action.payload };

    case "setInitialValues":
      return { ...action.initialValues };
    default:
      throw new Error();
  }
}

export function AddressBookEntryViewModal({ onSave }) {
  const { state, dispatch } = useAddressBookContext();
  const [formData, setFormData] = useReducer(reducer, initialState);

  useEffect(() => {
    setFormData({
      type: "setInitialValues",
      initialValues: {
        firstName: state.editEntity?.firstName || "",
        lastName: state.editEntity?.lastName || "",
        city: state.editEntity?.city || "",
        country: state.editEntity?.country || "",
        isDisabled: true,
      },
    });
  }, [state.editEntity]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  function closeModal() {
    dispatch({ type: ACTION_EDIT_ENTRY, payload: null });
  }

  function setEditMode(event) {
    event.preventDefault();
    setFormData({
      type: "isDisabled",
      value: false,
    });
  }

  if (!state.editEntity) return <></>;

  return (
    <div className={`bg-blue ${classes["modal"]}`}>
      <form className={classes.form} onSubmit={handleSubmit} onClose={() => {}}>
        <label htmlFor="name">Fitst Name:</label>
        <input
          type="firstName"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          disabled={formData.isDisabled}
          onChange={handleChange}
        />
        <label htmlFor="name">Last Name:</label>
        <input
          type="lastName"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          disabled={formData.isDisabled}
          onChange={handleChange}
        />

        <label htmlFor="email">City:</label>
        <input
          type="city"
          id="city"
          name="city"
          value={formData.city}
          disabled={formData.isDisabled}
          onChange={handleChange}
        />

        <label htmlFor="country">Country:</label>
        <input
          id="country"
          name="country"
          value={formData.country}
          disabled={formData.isDisabled}
          onChange={handleChange}
        />
        <div>
          <button type="submit">Submit</button>

          {formData.isDisabled && (
            <button type="edit" onClick={setEditMode}>
              Edit
            </button>
          )}
          {!formData.isDisabled && <button type="submit">Save</button>}
          <button type="close" onClick={closeModal}>
            close
          </button>
        </div>
      </form>
    </div>
  );
}
