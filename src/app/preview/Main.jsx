"use client";
import FormComponent from "@/components/FormComponent";
import Modal from "@/components/modal";
import React, { useState } from "react";
import Form from "./form";

const Main = () => {
  const [head, setHead] = useState("Form Title");

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
          <div className="create-content">
            <div className="input-head">
              <div className="preview-head">{head}</div>
              <hr />

              <div className="comp-data">
                <Form />
              </div>

              <div className="create-add">Submit</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
