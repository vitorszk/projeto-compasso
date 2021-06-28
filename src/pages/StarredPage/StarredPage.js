import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { goBack } from '../../routes/coordinator';
import './styled.css';

const StarredPage = () => {
  const [starred, setStarred] = useState([])
  const history = useHistory()

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const userName = urlParams.get("userName")


    axios.get(`${process.env.REACT_APP_API_URL}/users/${userName}/starred?client_id=${process.env.REACT_APP_API_CLIENT_ID}&client_secret=${process.env.REACT_APP_API_CLIENT_SECRET}`)
      .then((res) => {
        setStarred(res.data)
        console.log(res)

      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const StarredList = () => {
    return starred.map((r) => {
      return <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{r.name}</li>
        </ul>
      </div>
    })
  }

  return (
    <div className="StarredContainer">
      <div className="UserStarred">
        <h5 class="UserStarred__Title">Favoritos</h5>
        {StarredList()}
      </div>
      <div className="UserStarred__Button">
        <button type="button" class="btn btn-outline-light" onClick={() => goBack(history)}>VOLTAR PARA BUSCA</button>
      </div>
    </div>
  )
}

export default StarredPage