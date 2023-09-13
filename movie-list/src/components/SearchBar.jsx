import { useState } from "react";
import {
  ACTION_CHANGE_QUERY,
  useMovielistContext,
} from "../providers/MovieListProvider";

export default function SearchBar({}) {
  const { state, dispatch } = useMovielistContext();

  function handleChangeQuery(event) {
    dispatch({ type: ACTION_CHANGE_QUERY, payload: event.target.value });
  }
  return (
    <div>
      <button>➕ Add</button>
      <input onChange={handleChangeQuery} />
      <button>⚙️ Settings</button>
    </div>
  );
}
