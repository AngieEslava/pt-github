import React, {useState, useEffect}from 'react';
import './App.css';
import Formulario from './components/Formulario';
import 'bootstrap/dist/css/bootstrap.min.css';
import UsersGithub from './components/UsersGithub';

function App() {


  const [repoUser, setRepoUser ] = useState(null)

    useEffect(() => {
      // console.log('useEffect')
      // getUser()
    }, [])

  const getRepoUser = async (dataUser) => {
      
      const data = await fetch(`https://api.github.com/users/${dataUser.usergit}/repos`)
      const repos = await data.json()
      // console.log(users)
      if(repos.length > 0){
        setRepoUser(repos)
      }
      // console.log(dataUser)      
  }

  return (
    <div className="container ">
      
      <Formulario getRepoUser = {getRepoUser}/>
      <UsersGithub repoUser = {repoUser} />
    </div>
  );
}

export default App;
