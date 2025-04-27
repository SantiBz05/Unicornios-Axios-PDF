import React, { useState, useContext } from "react";
import UnicornsView from "./UnicornsView";
import { UnicornContext } from "../context/UnicornContext";

const UnicornsContainer = () => {
  const { unicorns, handleAddUnicorn, handleEditUnicorn, handleDeleteUnicorn } = useContext(UnicornContext);
  

  return (
    <>
      <UnicornsView
        unicorns={unicorns}
        handleAddUnicorn={handleAddUnicorn}
        handleEditUnicorn={handleEditUnicorn}
        handleDeleteUnicorn={handleDeleteUnicorn}
      />

    </>
  );
};

export default UnicornsContainer;
