import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NuvBar from "../NuvBar/NuvBar";

interface Props {
  fetchData: (userName: string) => void;
}

const Header: React.FC<Props> = React.memo(({fetchData}) => {

  return (
    <header className={"bg-dark"}>
      <NuvBar fetchData={fetchData}/>
    </header>
  );
});

export default Header;