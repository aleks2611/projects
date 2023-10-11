import { useContext } from "react";
import appContext from '../context/Provider'

function useContextProvider() {
  return useContext(appContext);
}

export default useContextProvider;
