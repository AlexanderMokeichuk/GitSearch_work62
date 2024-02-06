import React from "react";
import UserSearchForm from "../UserSearchForm/UserSearchForm";
import {NavLink} from "react-router-dom";
import {LOGO_STYLE} from "../../constants";

interface Props {
  fetchData: (userName: string) => void;
}

const NuvBar: React.FC<Props> = ({fetchData}) => {

  return (
    <nav className="container d-flex gap-3 align-items-center navbar bg-dark border-bottom border-body"
         data-bs-theme="dark">
      <NavLink to={"/"} className={"d-flex flex-column align-items-center link-underline link-underline-opacity-0"}>
        <div style={LOGO_STYLE}></div>
        <div className={"text-light"} style={{fontSize: 12, fontWeight: 700}}>GitSearch</div>
      </NavLink>
      <ul className="navbar-nav d-flex flex-row gap-3 me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to={"/"} className="nav-link" aria-current="page">User</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/repos"} className="nav-link" aria-current="page">Repositories</NavLink>
        </li>
      </ul>
      <UserSearchForm fetchData={fetchData}/>
    </nav>
  );
};

export default NuvBar;