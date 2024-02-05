import React from "react";

interface Props {
  userName: string;
  fetchData: (userName: string) => void;
  changeUserName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserSearchForm: React.FC<Props> = ({userName, fetchData, changeUserName}) => {

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
      />
      <button type={"submit"} className={"btn btn-primary"}>Search</button>
    </form>
  );
};

export default UserSearchForm;