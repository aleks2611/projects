/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useMemo, useReducer } from "react";

const initState = {
  query: "",
  movieList: [],
};

export const ACTION_CHANGE_QUERY = "ACTION_CHANGE_QUERY";

function reducer(state, action) {
  switch (action.type) {
    case ACTION_CHANGE_QUERY:
      return { ...state, query: action.payload };

    default:
      return { ...state };
  }
}

const MovielistBookContext = createContext({});

export const useMovielistContext = () => {
  return useContext(MovielistBookContext);
};

export function MovielistProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  const providerValue = useMemo(() => {
    return { state, dispatch };
  }, [state]);

  return (
    <MovielistBookContext.Provider value={providerValue}>
      {children}
    </MovielistBookContext.Provider>
  );
}
