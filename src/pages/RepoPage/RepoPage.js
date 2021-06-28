import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { goBack } from '../../routes/coordinator';
import './styled.css';

const RepoPage = () => {
  const [repo, setRepo] = useState([])
  const history = useHistory()

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const userName = urlParams.get("userName")


    axios.get(`${process.env.REACT_APP_API_URL}/users/${userName}/repos?client_id=${process.env.REACT_APP_API_CLIENT_ID}&client_secret=${process.env.REACT_APP_API_CLIENT_SECRET}`)
      .then((res) => {
        setRepo(res.data)
        console.log(res)

      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const RepoList = () => {
    return repo.map((r) => {
      return <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{r.name}</li>
        </ul>
      </div>
    })
  }

  return (
    <div className="ReposContainer">
      <div className="UserRepos">
        <h5 class="UserRepos__Title">Repositórios</h5>
        {RepoList()}
      </div>
      <div className="UserRepos__Button">
        <button type="button" class="btn btn-outline-light" onClick={() => goBack(history)}>VOLTAR PARA BUSCA</button>
      </div>
    </div>
  )
}

export default RepoPage