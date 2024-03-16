// CheckboxInput.js
import React, { useState } from "react";
import { Label, Required, Width } from "../Validations/required";

const CheckboxInput = ({ onChange }) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      type: "checkbox",
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

      {/* <Width onChange={handleInputChange} /> */}
    </>
  );
};

export default CheckboxInput;
