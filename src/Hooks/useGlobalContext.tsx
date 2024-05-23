import React from "react";
import { GlobalContext } from "../context/global";

const useGlobalContext = () => {
  const context = React.useContext(GlobalContext);

  if (!context) throw new Error("Context can only be used within a provider");
  else return context;
};

export default useGlobalContext;
