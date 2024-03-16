import React, { useState, useEffect } from "react";

const FormComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch compList from localStorage
    const compListData = localStorage.getItem("compList");

    if (compListData) {
      // Parse compList data into an array
      const parsedData = JSON.parse(compListData);
      // Set the parsed data into the state
      setData(parsedData);
    }
  }, []); // Empty dependency array to ensure useEffect runs only once when component mounts

  const renderInput = (item, index) => {
    switch (item.type) {
      case "text":
        return (
          <div key={index}>
            <input
              type="text"
              defaultValue={item.label}
              minLength={item.minLength}
            />
          </div>
        );
      case "email":
        return (
          <div key={index}>
            <input type="email" defaultValue={item.label} />
          </div>
        );
      case "password":
        return (
          <div key={index}>
            <input
              type="password"
              defaultValue={item.label}
              minLength={item.minLength}
            />
          </div>
        );
      case "date":
        return (
          <div key={index}>
            <label>{item.label}</label>
            <input type="date" />
          </div>
        );
      case "number":
        return (
          <div key={index}>
            <input
              type="number"
              defaultValue={item.label}
              style={{ width: "10rem" }}
            />
          </div>
        );
      case "tel":
        return (
          <div key={index}>
            <input
              style={{ width: "10rem" }}
              type="tel"
              defaultValue={item.label}
            />
          </div>
        );
      case "checkbox":
        return (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "1rem",
              margin: "0 1rem",
            }}
          >
            <div>
              <label>{item.label}</label>
            </div>
            <div className="check-input">
              <input type="checkbox" />
            </div>
          </div>
        );
      case "file":
        return (
          <div key={index}>
            <label>{item.label}</label>
            <input type="file" defaultValue={item.label} />
          </div>
        );
      case "textarea":
        return (
          <div key={index}>
            <label>{item.label}</label>
            <textarea defaultValue="item.label" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="inputList">
      {data.map((item, index) => renderInput(item, index))}
    </div>
  );
};

export default FormComponent;
