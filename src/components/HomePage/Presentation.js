import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Presentation = () => {
  const state = useSelector((state) => state.userReducer.user);
  if (state == null) {
    return <Navigate to="/login" replace />;
  }
  return <div>hi</div>;
};

export default Presentation;
