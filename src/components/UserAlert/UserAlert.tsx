import React from "react";
import {User} from "../../type";
import {NavLink} from "react-router-dom";
import dayjs from "dayjs";

interface Props {
  user: User;
}

const UserAlert: React.FC<Props> = ({user}) => {

  return user && (
    <div className={"bg-dark d-flex justify-content-between align-items-center  gap-5 p-4 rounded-5"}>
      <div className={"d-flex align-items-center gap-3 col-4"}>
        <img src={user.avatar_url} alt={"#"} className={"rounded-circle"} style={{width: 100, height: 100}}/>
        <div className={"d-flex flex-column gap-2"}>
          <a href={user.html_url} target="_blank" className={"fs-6 text-white link-offset-3"}>{user.login}</a>
          <p style={{fontSize: 12}}>Create at: {dayjs(user.created_at).format("DD/MM/YYYY")}</p>
        </div>
      </div>
      <div className={"d-flex align-items-center gap-5"}>
        <NavLink to={"/repos"} className={"btn btn-secondary p-3"}>Public repositories {user.public_repos}</NavLink>
      </div>
    </div>
  );
};

export default UserAlert;