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

  const gretCurrTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const time = hours + ":" + minutes + " " + ampm;
    return time;
  };

  const getCurrentDate = () => {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    //months in words
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const currDate = day + "-" + months[month - 1] + "-" + year;
    return currDate;
  };

  return (
    <>
      <div className="create-top">
        <div className="create-inner-top">
          <div className="create-head">
            <i class="fa-solid fa-angles-right"></i>{" "}
            {head === "Form Title" ? "Untitled" : head}
          </div>
          <div className="create-content">
            <div className="create-top-shade">
              <div className="colors">
                <div className="red-dot"></div>
                <div className="yellow-dot"></div>
                <div className="green-dot"></div>
              </div>
              <div className="date-time">
                <div className="date">{getCurrentDate()}</div>
                <div className="time">{gretCurrTime()}</div>
              </div>
            </div>
            <div className="input-head">
              <input type="text" placeholder={head} onChange={headChange()} />
              <hr />

              <div className="comp-data">
                <div>
                  <FormComponent />
                </div>
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
