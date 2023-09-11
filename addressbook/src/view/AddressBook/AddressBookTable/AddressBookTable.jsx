import { useMemo, useState } from "react";
import {
  ACTION_DELETE_ENTRY,
  ACTION_EDIT_ENTRY,
  useAddressBookContext,
} from "../AddressBookProvider/AddressBookProvider";
import { comparePrim } from "../../../utils/utils";
import { useApi } from "../../../hooks/useFetch";
import { AddressBookEntryViewModal } from "../AddressBookEntryViewModal/AddressBookEntryViewModal";
import { Dialog } from "../../../shared/Dialog/Dialog";
import { useDialog } from "../../../hooks/useDialog";
import Table from "../../../shared/Table/Table";
import classes from "./AddressBookTable.module.css";

export function AddressBookTable() {
  const { state, dispatch } = useAddressBookContext();
  const { deleteEntry } = useApi();
  const tableColumns = ["Avatar", "Name", "Address", "Actions"];

  const deleteDialog = useDialog((shouldDelete, entry) => {
    if (shouldDelete === true) {
      handleConfirmDelete(entry);
    }
  });

  const filteredEntries = useMemo(() => {
    const query = state.query;
    return state.entries.filter(
      ({ firstName, lastName, country, city, email }) =>
        comparePrim(firstName, query) ||
        comparePrim(lastName, query) ||
        comparePrim(country, query) ||
        comparePrim(city, query) ||
        comparePrim(email, query)
    );
  }, [state]);

  const rows = filteredEntries.map((entry) => (
    <tr key={entry.uuid}>
      <td>
        <img
          className={classes["address-book--table--avatar"]}
          src={entry.avatarUrl}
          alt={"Avatar"}
        />
      </td>
      <td>
        {entry.firstName} {entry.lastName}
      </td>
      <td>
        {entry.country}, {entry.city}
      </td>
      <td>
        <button
          style={{ marginRight: "5px" }}
          onClick={() => handleViewEntery(entry)}
        >
          👁️
        </button>
        <button onClick={() => deleteDialog.show(entry)}>🗑️</button>
      </td>
    </tr>
  ));

  async function handleConfirmDelete(entry) {
    const result = await deleteEntry(
      `http://localhost:5005/api/entries/${entry.uuid}`
    );
    if (result) {
      dispatch({ type: ACTION_DELETE_ENTRY, payload: entry.uuid });
    }
  }

  function handleViewEntery(entry) {
    dispatch({ type: ACTION_EDIT_ENTRY, payload: entry });
  }

  return (
    <>
      <Table columns={tableColumns}>
        <>{rows}</>
      </Table>
      <AddressBookEntryViewModal />

      <Dialog isOpen={deleteDialog.isOpen}>
        <div className={`flex-v bg-blue ${classes["modal"]}`}>
          <span>{`Are you sugre you want to delete: '${deleteDialog.context?.firstName} ${deleteDialog.context?.lastName}'`}</span>
          <div className={"flex-h"}>
            <button onClick={() => deleteDialog.close(true)}>Yes</button>
            <button onClick={() => deleteDialog.close(false)}>No</button>
          </div>
        </div>
      </Dialog>
    </>
  );
}
