import React from "react";
import {User} from "../../type";
import {NavLink} from "react-router-dom";

interface Props {
  user: User;
}
const UserAlert: React.FC<Props> = ({user}) => {

  return user &&(
    <div className={"alert alert-secondary"}>
      <div>
        <img src={user.avatar_url} alt={"#"} style={{width:30, height: 30}}/>
        <a href={user.html_url} target="_blank">{user.login}</a>
        <p>{user.type}</p>
        <NavLink to={"/repos"}>Repositories</NavLink>
      </div>
    </div>
  );
};

export default UserAlert;