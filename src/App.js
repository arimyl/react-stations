// DO NOT DELETE

import * as React from 'react'
import './App.css'
import './DogImage'
import './Description'
import './DogListContainer'
import { useState } from 'react'
import { DogListContainer } from './DogListContainer'
// import axios from "axios";
/**
 * 
 * @type {React.FC}
 */
export const App = () => {

  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/mountain-bernese/n02107683_5960.jpg");

  const getDogUrl = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setDogUrl(data.message)
      });
  }

  return (

    <div className="container">
      <header className="header">React-stations</header>
      <div className="dog-div">
        <button className="update-btn" onClick={() => getDogUrl()}>更新</button>
        <p>Dogs image.</p>
        <div className="img-container">
          <img className="dog-img" src={dogUrl} alt="dog-api random-image" />
        </div>
      </div>
      <DogListContainer />
    </div>
  )
}
