import React from "react";
import {LOGO_STYLE} from "../../constants";
import {NavLink} from "react-router-dom";

const Footer: React.FC = React.memo(() => {

  return (
    <footer className={"bg-dark p-3 mt-auto"}>
      <div className={"container d-flex justify-content-end"}>
        <NavLink to={"/"} className={"d-flex flex-column link-underline link-underline-opacity-0"}>
          <div style={LOGO_STYLE}></div>
          <div className={"text-light"} style={{fontSize: 12, fontWeight: 700}}>GitSearch</div>
        </NavLink>
      </div>
    </footer>
  );
});

export default Footer;