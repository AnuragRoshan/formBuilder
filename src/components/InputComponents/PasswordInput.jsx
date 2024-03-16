// PasswordInput.js
import React, { useState } from "react";
import {
  Label,
  MinLength,
  PasswordValidate,
  Required,
  Width,
} from "../Validations/required";

const PasswordInput = ({ onChange }) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      type: "password",
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
      <PasswordValidate onChange={handleInputChange} />
      {/* <Width onChange={handleInputChange} /> */}
    </>
  );
};

export default PasswordInput;
