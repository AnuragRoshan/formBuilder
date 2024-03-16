import React, { useState } from "react";
import { components } from "@/data/components";
import ValidationComp from "./ValidationComp";

const Modal = () => {
  const [selectedComponentId, setSelectedComponentId] = useState(null);

  const handleComponentClick = (id) => {
    setSelectedComponentId(id);
  };

  return (
    <div className="modal-top">
      <div className="modal-inner-top">
        <div className="modal-content">
          <div className="modal-head">Choose Input Blocks</div>
          <hr />
          <div className="hero-modal">
            <div className="modal-comps">
              {components.map((component) => (
                <div
                  key={component.id}
                  className={`modal-comp ${
                    selectedComponentId === component.id ? "active" : ""
                  }`}
                  onClick={() => handleComponentClick(component.id)}
                >
                  <div className="modal-text">{component.name}</div>
                </div>
              ))}
            </div>
            <div className="modal-select">
              <ValidationComp id={selectedComponentId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
