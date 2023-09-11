import { useCallback, useEffect } from "react";
import { AddressBookBar } from "./AddressBookBar/AddressBookBar";
import { AddressBookTable } from "./AddressBookTable/AddressBookTable";
import {
  ACTION_SET_ENTRIES,
  useAddressBookContext,
} from "./AddressBookProvider/AddressBookProvider";
import classes from "./AddressBook.module.css";

export function AddressBook() {
  const { dispatch } = useAddressBookContext();

  const fetchEntries = useCallback(async () => {
    const response = await fetch("http://localhost:5005/api/entries");
    const enteries = await response.json();
    dispatch({ type: ACTION_SET_ENTRIES, payload: enteries });
  }, [dispatch]);

  useEffect(() => {
    fetchEntries();
  }, [fetchEntries]);

  return (
    <>
      <AddressBookBar />
      <AddressBookTable />
    </>
  );
}
