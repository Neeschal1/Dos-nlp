import React from "react";
import { AvailableServices } from "../../constants/avaiableServices";
import { useLocation } from "react-router-dom";

const SingleServices = () => {
  const { state } = useLocation();
  return (
    <div>
      <h1>{state.title}</h1>
    </div>
  );
};

export default SingleServices;
