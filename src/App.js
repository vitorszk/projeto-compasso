import React from 'react'
import theme from './constants/themes';
import Router from './routes/router';
import Background from './assets/Background.jpg';
import './index.css';

const App = () => {
  return (
    <div className="ScreenContainer">
      <img className="HomePageContainer__Background" src={Background} />
      <Router />
    </div>
  );
}

export default App;
