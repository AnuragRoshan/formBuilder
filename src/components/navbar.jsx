import Link from "next/link";
import React from "react";

const navbar = () => {
  return (
    <div className="nav-top">
      <div className="nav-inner-top">
        <Link href="/">
          <div className="nav-logo">Formify</div>
        </Link>
        <div className="nav-links">
          <div className="settings light">Setting</div>
          <div className="light">SingUp</div>
          <Link href="/preview">
            {" "}
            <div className="preview hard">Preview</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default navbar;
