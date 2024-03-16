// NumberInput.js
import React, { useState } from "react";
import {
  Label,
  Required,
  MinLength,
  MaxLength,
  Width,
} from "../Validations/required";

const NumberInput = ({ onChange }) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      type: "number",
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
      <MinLength onChange={handleInputChange} />
      <MaxLength onChange={handleInputChange} />
      {/* <Width onChange={handleInputChange} /> */}
    </>
  );
};

export default NumberInput;
