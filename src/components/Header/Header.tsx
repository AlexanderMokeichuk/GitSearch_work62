import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NuvBar from "../NuvBar/NuvBar";

interface Props {
  userName: string;
  fetchData: (userName: string) => void;
  changeUserName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header: React.FC<Props> = ({userName, fetchData, changeUserName}) => {

  return (
    <header className={"bg-dark"}>
      <NuvBar fetchData={fetchData} userName={userName} changeUserName={changeUserName}/>
    </header>
  );
};

export default Header;