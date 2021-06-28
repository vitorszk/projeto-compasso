import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { goBack } from '../../routes/coordinator';
import './styled.css';


const UserPage = () => {

  const [userInfo, setUserInfo] = useState({})

  const history = useHistory()
  const urlParams = new URLSearchParams(window.location.search);
  const userName = urlParams.get("userName")

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/users/${userName}?client_id=${process.env.REACT_APP_API_CLIENT_ID}&client_secret=${process.env.REACT_APP_API_CLIENT_SECRET}`)
      .then((res) => {
        setUserInfo(res.data)

      })
      .catch((err) => {
        console.log(err)
      })

  })

  const renderDetails = () => {
    const props = [ 'bio', 'login', 'location']
    return props.map(item => {
      const value = userInfo[item]
      if (value) return <p class="card-text"><small class="text-muted">{value}</small></p>
    })
  }

  return (
    userInfo &&
    <div className="UserContainer">
      <div className="UserContainer__Card">
        <div class="card mb-3">
          <img src={userInfo?.avatar_url} class="card-img-top" alt="..." className="UserContainer__Card--img" />
          <div class="card-body">
            <h5 class="card-title">{userInfo?.name}</h5>      
            <p class="card-text">{userInfo?.bio}</p>
            {renderDetails()}
          </div>
        </div>
      </div>
      <div>
        <button type="button" class="btn btn-outline-light" onClick={() => goBack(history)}>VOLTAR</button>
      </div>
    </div>
  );
}


export default UserPage;