import React, { useState } from 'react';
import axios from 'axios';
import HPLogo from '../../assets/HPLogo.png';
import Background from '../../assets/Background.jpg';
import UserCard from '../../components/UserCard/UserCard';
import './styled.css';


const HomePage = () => {

  const [userInput, setUserInput] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSearch = (event) => {
    setUserInput(event.target.value)
  }

  const onEnterHandleSearch = (event) => {
    if(event.keyCode === 13) {
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/users/${userInput}?client_id=${process.env.REACT_APP_API_CLIENT_ID}&client_secret=${process.env.REACT_APP_API_CLIENT_SECRET}`)
      .then((res) => {
        setUserData(res.data)

      })
      .catch(() => {
        alert("Usuário não encontrado, tente novamente")
      })

  }


  return (
    <div className="HomePageContainer">
      <div className="HomePageContainer__search-container">
        <div className="input-group mb-3" id="input-container">
          <input 
          type="text" 
          class="form-control" 
          placeholder="Busque um usuário GitHub" 
          aria-label="Recipient's username" 
          aria-describedby="button-addon2" 
          onChange={(event) => handleSearch(event)} 
          onKeyDown={(event) => onEnterHandleSearch(event)}
          />
          <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => handleSubmit()}>BUSCAR</button>
        </div>
      </div>
      <img className="HomePageContainer__Background" src={Background}/>
      {userData ? <UserCard userData={userData} setUserData={setUserData}/> : <img className="HomePageContainer__OctoCat" src={HPLogo} />}
    </div>
  );
}

export default HomePage;

