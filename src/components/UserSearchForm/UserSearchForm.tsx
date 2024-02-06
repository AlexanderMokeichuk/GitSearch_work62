import React, {useState} from "react";
import {DEFAULT_USER_NAME} from "../../constants";

interface Props {
  fetchData: (userName: string) => void;
}

const UserSearchForm: React.FC<Props> = ({fetchData}) => {
  const [userName, setUserName] = useState<string>(DEFAULT_USER_NAME);

  const changeUserName = (e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    void fetchData(userName);
  };

  return (
    <form onSubmit={submit} className={"d-flex gap-3"}>
      <input
        type={"text"}
        className={"form-control"}
        value={userName}
        onChange={changeUserName}
        placeholder={"Login GitHub"}
      />
      <button type={"submit"} className={"btn btn-primary"}>Search</button>
    </form>
  );
};

export default UserSearchForm;