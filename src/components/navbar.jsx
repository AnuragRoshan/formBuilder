import React from "react";

const navbar = () => {
  return (
    <div className="nav-top">
      <div className="nav-inner-top">
        <div className="nav-logo">
          <a href="/">FBb</a>
        </div>
        <div className="nav-links">
          <div className="settings light">Setting</div>
          <div className="light">SingUp</div>
          <div className="preview hard">Preview</div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
