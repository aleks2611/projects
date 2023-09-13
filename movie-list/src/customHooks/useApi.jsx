import React, { useEffect, useReducer } from "react";
const SUCCESS = "SUCCESS";
const ERROR = "ERROR";

export const GET = "GET";
export const DELETE = "DELETE";
export const POST = "POST";

const initialState = {
  loading: true,
  error: "",
  data: null,
};
const reducerFunction = (state, action) => {
  switch (action.type) {
    case SUCCESS:
      return {
        loading: false,
        error: "",
        data: action.payload,
      };
    case ERROR: {
      return {
        loading: false,
        error: action.payload,
        data: null,
      };
    }
    default:
      return state;
  }
};
const useApi = (url, method, headers, body = null) => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  const fetchData = async () => {
    try {
      const res = await fetch(url, {
        method: method,
        headers: headers,
        body: body,
      });
      const data = await res.json();
      dispatch({
        type: SUCCESS,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: ERROR,
        payload: e.message,
      });
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);
  return state;
};
export default useApi;
