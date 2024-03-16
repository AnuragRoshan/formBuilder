import React, { useState } from "react";
import {
  Label,
  Required,
  MinLength,
  MaxLength,
  Width,
} from "../Validations/required";

const PhoneInput = ({ onChange }) => {
  const [formData, setFormData] = useState({
    type: "tel",
  });

  const handleTextChange = async (event) => {
    await setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
    onChange(formData); // Notify parent component of form data change
    console.log(formData);
  };

  return (
    <>
      <Label onChange={handleTextChange} />
      <Required onChange={handleTextChange} />
      <MinLength onChange={handleTextChange} />
      <MaxLength onChange={handleTextChange} />
      {/* <Width onChange={handleTextChange} /> */}
    </>
  );
};

export default PhoneInput;
