// ValidationComp.js
import React, { useState, useEffect } from "react";
// Import other input components

import { components } from "@/data/components";
import EmailInput from "./InputComponents/EmailInput";
import PasswordInput from "./InputComponents/PasswordInput";
import DateInput from "./InputComponents/DateInput";
import NumberInput from "./InputComponents/NumberInput";
import PhoneInput from "./InputComponents/PhoneInput";
import CheckboxInput from "./InputComponents/CheckBoxInput";
import SelectInput from "./InputComponents/SelectInput";
import FileInput from "./InputComponents/FileInput";
import TextInput from "./InputComponents/TextInput";

const ValidationComp = ({ id }) => {
  const selectedComponent = components.find((comp) => comp.id === id);

  const [formData, setFormData] = useState({});

  // useEffect(() => {
  //   // Reset formData when the component changes
  //   setFormData({});
  // }, [id]);

  const handleInputChange = async (data) => {
    await setFormData((prevData) => ({ ...prevData, ...data }));
    console.log("formData", formData);
  };

  const handleAddComponent = () => {
    // Retrieve existing data from localStorage
    const existingData = localStorage.getItem("compList");

    // Parse existing data into an array or initialize an empty array
    const compList = existingData ? JSON.parse(existingData) : [];

    // Push the new formData into the compList array
    compList.push(formData);

    // Store the updated compList array back into localStorage
    localStorage.setItem("compList", JSON.stringify(compList));

    console.log("Sending", formData, "to backend");
    // You can perform additional actions here before sending data to the backend
    window.location.href = "/create";
  };

  const renderComponentInputs = () => {
    switch (selectedComponent?.type) {
      case "text":
        return <TextInput onChange={handleInputChange} />;
      case "email":
        return <EmailInput onChange={handleInputChange} />;
      case "password":
        return <PasswordInput onChange={handleInputChange} />;
      case "date":
        return <DateInput onChange={handleInputChange} />;
      case "number":
        return <NumberInput onChange={handleInputChange} />;
      case "tel":
        return <PhoneInput onChange={handleInputChange} />;
      case "checkbox":
        return <CheckboxInput onChange={handleInputChange} />;
      case "select":
        return <SelectInput onChange={handleInputChange} />;
      case "file":
        return <FileInput onChange={handleInputChange} />;
      case "textarea":
        return <TextInput onChange={handleInputChange} />;
      // Add cases for other input types
      default:
        return null;
    }
  };

  return (
    <div className="valid-top">
      {selectedComponent ? (
        <>
          <div className="valid-head">{selectedComponent.name}</div>
          <div className="valid-desc">{selectedComponent.description}</div>
          <div className="valid-comp">
            <div className="valid-comp-head">Validations</div>
            <div className="valid-comp-list">{renderComponentInputs()}</div>
          </div>
          <div className="add-comp-btn">
            <button className="add-comp" onClick={handleAddComponent}>
              Add Component
            </button>
          </div>
        </>
      ) : (
        <div
          className="valid-comp"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <img
            style={{ width: "max-content", height: "70vh" }}
            src="https://ik.imagekit.io/i3divn77k/undraw_data_input_fxv2.svg?updatedAt=1710505818865"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default ValidationComp;
