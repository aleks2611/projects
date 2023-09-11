import { ACTION_CHANGE_QUERY, useAddressBookContext } from "../AddressBookProvider/AddressBookProvider";
import classes from "./AddressBookBar.module.css";

export function AddressBookBar() {
  const { state, dispatch } = useAddressBookContext();

  function handleChangeQuery(event) {
    dispatch({ type: ACTION_CHANGE_QUERY, payload: event.target.value });
  }

  return (
    <div className={classes["address-book--bar"]}>
      <button>➕ Add</button>
      <input value={state.query} onChange={handleChangeQuery} />
      <button>⚙️ Settings</button>
    </div>
  );
}
