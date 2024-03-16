import React from "react";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <div className="home-banner-top">
      <div className="home-banner-inner-top">
        <div className="home-head">
          Crafting a form is like penning a quick note!
        </div>
        <div className="home-description">
          Shake off the monotony of traditional forms. Introducing{" "}
          <b>Formify</b> — your gateway to hassle-free form creation, all for
          free!
        </div>
        <Link href="/create">
          <div className="home-btn">Lets Formify</div>
        </Link>
      </div>
      <div className="images">
        <img
          src="https://ik.imagekit.io/i3divn77k/undraw_specs_re_546x.svg?updatedAt=1710601321089"
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
};

export default HomeBanner;
