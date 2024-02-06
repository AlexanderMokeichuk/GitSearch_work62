import React from "react";
import {Repository} from "../../type";

interface Props {
  repository: Repository;
}

const RepositoryAlert: React.FC<Props> = React.memo(({repository}) => {

  return (
    <div className={"alert bg-dark border-secondary"}>
      <div className={"d-flex justify-content-between"}>
        <a href={repository.html_url} target={"_blank"}
           className={"link-underline link-underline-opacity-0 fw-bold"}>{repository.name}</a>
        <div className={"border rounded-5 border-secondary text-secondary px-2 py-1"}
             style={{fontSize: 10}}>{repository.visibility}</div>
      </div>
      <div className={"mt-4"}>
        <h6 className={"text-secondary"} style={{fontSize: 12}}>{repository.language}</h6>
      </div>
    </div>
  );
});

export default RepositoryAlert;