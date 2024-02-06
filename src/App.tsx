import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import {BASE_URL, DEFAULT_USER_NAME} from "./constants";
import {useCallback, useEffect, useState} from "react";
import {User} from "./type";
import UserAlert from "./components/UserAlert/UserAlert";
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import UserRepos from "./components/UserRepos/UserRepos";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async (userName: string) => {
    try {
      setError(null);
      const {data: user} = await axios.get<User>(BASE_URL + `/users/${userName}`);
      setUser({
        created_at: user.created_at,
        login: user.login,
        avatar_url: user.avatar_url,
        html_url: user.html_url,
        repos_url: user.repos_url,
        public_repos: user.public_repos,
      });

    } catch (e) {
      setError("User dose not exist");
    }
  }, []);

  useEffect(() => {
    void fetchData(DEFAULT_USER_NAME);
  }, [fetchData]);


  return (
    <div className={"d-flex flex-column vh-100 justify-content-between"}>
      <Header fetchData={fetchData}/>
      <main className={"container"}>
        {(user === null)? <Loader /> : undefined}
        <Routes>
          <Route path={"/"} element={(
            <div className={"mt-3 d-flex flex-column gap-5"}>
              <div className={"mt-5"}>
                {(error)
                  ? <h3>{error}</h3>
                  : user && <UserAlert user={user}/>
                }
              </div>
              <div className={"border-bottom p-2"}>
                Enter your login or the login of another GitHub user to view their profile!!
              </div>
            </div>
          )}/>
          <Route path={"/repos"} element={(
            <div className={"mt-5"}>
              {(error)
                ? <h3>{error}</h3>
                : user && <UserRepos user={user}/>
              }
            </div>
          )}/>
          <Route path={"*"} element={(<h2>Not found 404</h2>)}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
