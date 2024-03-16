// EmailInput.js
import React, { useState } from "react";
import {
  EmailValidate,
  Label,
  NotContain,
  Required,
  Width,
} from "../Validations/required";

const EmailInput = ({ onChange }) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      type: "email",
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
      <EmailValidate onChange={handleInputChange} />
      <NotContain onChange={handleInputChange} />

      {/* <Width onChange={handleInputChange} /> */}
    </>
  );
};

export default EmailInput;
