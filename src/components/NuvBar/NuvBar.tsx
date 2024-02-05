import React from "react";
import UserSearchForm from "../UserSearchForm/UserSearchForm";
import {NavLink} from "react-router-dom";

interface Props {
  userName: string;
  fetchData: (userName: string) => void;
  changeUserName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NuvBar: React.FC<Props> = ({userName, fetchData, changeUserName}) => {
  return (
    <nav className="container navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <NavLink to={"/"} className={"navbar-brand"}>GitSearch</NavLink>
      <ul className="navbar-nav d-flex flex-row gap-3 me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to={"/"} className="nav-link" aria-current="page">Profile</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/repos"} className="nav-link" aria-current="page">Repositories</NavLink>
        </li>
      </ul>
      <UserSearchForm fetchData={fetchData} changeUserName={changeUserName} userName={userName}/>
    </nav>
  );
};

export default NuvBar;