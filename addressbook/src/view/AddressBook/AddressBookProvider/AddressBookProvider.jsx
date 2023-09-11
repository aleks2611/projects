/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useMemo, useReducer } from "react";

const initState = {
  query: "",
  entries: [],
  editEntity: null,
};

export const ACTION_CLEAR = "ACTION_CLEAR";
export const ACTION_SET_ENTRIES = "ACTION_SET_ENTRIES";
export const ACTION_CHANGE_QUERY = "ACTION_CHANGE_QUERY";
export const ACTION_DELETE_ENTRY = "ACTION_DELETE_ENTRY";
export const ACTION_EDIT_ENTRY = "ACTION_EDIT_ENTRY";

function reducer(state, action) {
  switch (action.type) {
    case ACTION_CHANGE_QUERY:
      return { ...state, query: action.payload };
    case ACTION_SET_ENTRIES:
      return { ...state, entries: action.payload };
    case ACTION_DELETE_ENTRY:
      return {
        ...state,
        entries: state.entries.filter((entry) => entry.uuid !== action.payload),
      };
    case ACTION_CLEAR:
      return initState;
    case ACTION_EDIT_ENTRY:
      return {
        ...state,
        editEntity: action.payload,
      };
    default:
      return { ...state };
  }
}

const AddressBookContext = createContext({});

export const useAddressBookContext = () => {
  return useContext(AddressBookContext);
};

export function AddressBookProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  const providerValue = useMemo(() => {
    return { state, dispatch };
  }, [state]);

  return (
    <AddressBookContext.Provider value={providerValue}>
      {children}
    </AddressBookContext.Provider>
  );
}
