// DO NOT DELETE
import * as React from 'react'
import './App.css'
import './DogImage'
import './Description'
import { useState } from 'react'
import { useEffect } from 'react'
// import axios from "axios";
/**
 * 
 * @type {React.FC}
 */
export const DogListContainer = () => {
  const[breeds, setBreeds] = useState([]);

  // fetch('https://dog.ceo/api/breeds/list/all')
  // .then(res => res.json())
  // .then(data => {
  //   setBreeds([data.message])
  //   console.log(data)
  // })
  
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
    .then(data => {
      setBreeds(()=> (
        Object.keys(data.message).map(key => key)
      ))
      console.log(data)
    })
  }, []) 
  console.log(breeds)

  return(
    <div>
      <ul>
        {/* {
          Object.keys(breeds).map((key) => (
            // <li key={key}>{breeds[key]}</li>
            <li key={key}>{key}</li>
          ))
        } */}
      </ul>
    </div>
  )
}