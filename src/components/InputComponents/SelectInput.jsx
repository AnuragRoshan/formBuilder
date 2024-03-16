// SelectInput.js
import React, { useState } from "react";
import { Label, Options, Required, Width } from "../Validations/required";

const SelectInput = ({ onChange }) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      type: "select",
    }));
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
    onChange(formData); // Notify parent component of form data change
  };

  return (
    <>
      <Label onChange={handleInputChange} />
      <Required onChange={handleInputChange} />
      <Options onChange={handleInputChange} />
      {/* <Width onChange={handleInputChange} /> */}
    </>
  );
};

export default SelectInput;
