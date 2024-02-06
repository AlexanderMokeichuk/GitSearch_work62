import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {Repository, User} from "../../type";
import RepositoryAlert from "../RepositoryAlert/RepositoryAlert";
import dayjs from "dayjs";

interface Props {
  user: User;
}

const UserRepos: React.FC<Props> = ({user}) => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const fetchData = useCallback(async () => {
    const {data: repositories} = await axios.get<Repository[]>(user.repos_url);

    const promises = repositories.map(async (repository: Repository) => {
      return {
        id: repository.id,
        name: repository.name,
        language: repository.language,
        html_url: repository.html_url,
        visibility: repository.visibility,
      };
    });

    const newRepositories = await Promise.all(promises);
    setRepositories(newRepositories);
  }, [user.repos_url]);

  useEffect(() => {
    void fetchData();
  }, [fetchData, user.repos_url]);


  return (
    <div className={"mt-4"}>
      <div className={"row"}>
        <div className={"col-3"}>
          <img src={user.avatar_url} alt={"#"} className={"rounded-circle"} style={{width: 200, height: 200}}/>
          <div className={"d-flex flex-column gap-2"}>
            <a href={user.html_url} target="_blank" className={"fs-6 text-white link-offset-3"}>{user.login}</a>
            <p style={{fontSize: 12}}>Create at: {dayjs(user.created_at).format("DD/MM/YYYY")}</p>
          </div>
        </div>

        <div className={"col"}>
          {
            repositories.map((repository) => {
              return <RepositoryAlert key={repository.id} repository={repository}/>;
            })
          }
        </div>
      </div>
    </div>
  );
};

export default UserRepos;