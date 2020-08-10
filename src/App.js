import React, { useState, useEffect } from "react";
import "./App.css";
import Formulario from "./components/Formulario";
import "bootstrap/dist/css/bootstrap.min.css";
import UsersGithub from "./components/UsersGithub";
import Filtro from "./components/Filtro";


function App() {
  const [repoUser, setRepoUser] = useState([]);
  const [page, setPage] = useState(1);
  console.log(repoUser)


  useEffect(() => {
    const usuario = window.localStorage.getItem("datosCompletos");
    if (usuario) {
      const usergit = JSON.parse(usuario).usergit;
      console.log("cualquiercosa");
      getRepoUser(usergit);
    }
    console.log(page);
  }, [page]);

  const getRepoUser = async (usergit) => {
    const data = await fetch(
      `https://api.github.com/users/${usergit}/repos?page=${page}&per_page=5`
    );
    const repos = await data.json();
    const filtered = repos.map((item) => {
      return {
        language: item.language,
        default_branch: item.default_branch,
        clone_url: item.clone_url,
        name: item.name,
        description: item.description,
      };
    });
    setRepoUser(filtered);
    console.log('fetch')
  };

  

  return (
    <div className="container ">
      <Formulario getRepoUser={getRepoUser} />
      <Filtro page = {page} setPage={setPage} getRepoUser={getRepoUser} repoUser={repoUser}  />
      <UsersGithub repoUser={repoUser} setRepoUser={setRepoUser} />
      <p class="text-center text-gray-500 text-xs">&copy;2020 Angie Eslava. All rights reserved.</p>
    </div>
  );
}

export default App;
