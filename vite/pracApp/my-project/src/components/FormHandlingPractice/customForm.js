import React, { useState } from "react";

const useCustomForm = (initialState) => {
  const [state, setState] = useState(initialState);
  const HandleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return {state,HandleChange}
};

export default useCustomForm;
