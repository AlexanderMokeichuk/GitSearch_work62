import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import {BASE_URL} from "./constants";
import React, {useCallback, useEffect, useState} from "react";
import {User} from "./type";
import UserAlert from "./components/UserAlert/UserAlert";
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import UserRepos from "./components/UserRepos/UserRepos";

const defaultUserName = "AlexanderMokeichuk";

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>(defaultUserName);

  const changeUserName = (e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value);

  const fetchData = useCallback(async (userName: string) => {
    try {
      setError(null);
      const {data} = await axios.get<User>(BASE_URL + `/users/${userName}`);
      console.log(data);
      setUser({
        id: data.id,
        login: data.login,
        avatar_url: data.avatar_url,
        html_url: data.html_url,
        type: data.type,
        repos_url: data.repos_url,
      });
    } catch (e) {
      setError("User dose not exist");
    }
  }, []);

  useEffect(() => {
    void fetchData(userName);
  }, [fetchData, userName]);


  return (
    <>
      <Header userName={userName} fetchData={fetchData} changeUserName={changeUserName} />
      <div className={"container"}>
        <Routes>
          <Route path={"/"} element={(
            <div className={"mt-5"}>
              {(error)
                ? <h3>{error}</h3>
                : user && <UserAlert user={user}/>
              }
            </div>
          )}/>
          <Route path={"/repos"} element={(
            <UserRepos userName={userName}/>
          )}/>
          <Route path={"*"} element={(<h2>Not found 404</h2>)}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
