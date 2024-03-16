"use client";
import FormComponent from "@/components/FormComponent";
import Modal from "@/components/modal";
import React, { useState } from "react";

const Main = () => {
  const [head, setHead] = useState("Form Title");
  const [modelOpen, setModelOpen] = useState(false);

  const toggleModal = () => {
    setModelOpen(!modelOpen);
  };

  const headChange = () => {
    return (e) => {
      setHead(e.target.value);
      if (e.target.value === "") setHead("Form Title");
    };
  };
  return (
    <>
      <div className="create-top">
        <div className="create-inner-top">
          <div className="create-head">
            {">>"} {head === "Form Title" ? "Untitled" : head}
          </div>
          <div className="create-content">
            <div className="input-head">
              <input type="text" placeholder={head} onChange={headChange()} />
              <hr />

              <div className="comp-data">
                <FormComponent />
              </div>

              <div className="create-add" onClick={toggleModal}>
                Add New Component
              </div>
            </div>
          </div>
        </div>
      </div>
      {modelOpen && (
        <div className="create-modal">
          <Modal toggle={toggleModal} />
        </div>
      )}
    </>
  );
};

export default Main;
