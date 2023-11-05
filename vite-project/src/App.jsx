import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

export default function App() {

// Form for name
const [inputName, setInputName] = useState("");
//const [inputNickname, setInputNickname] = useState("");
const [weatherData, setWeatherData] = useState("");


// Call weather data via lat and lon:
  // Weather Now:
  // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
  // https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}
  // Call weather data via geo location
  // https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}
function findWeather(props) {
  // API call comes from:
  //const cityName = props; // "New York";
  const apiKey = 'bdba01f2e3e68946dcdc8126a8ceb556';

  console.log(props);
  const response = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props}&units=imperial&appid=${apiKey}`)
  .then((response) => response.json())
  .then(result => {
        setWeatherData(result)
        console.log(result);
  });
}

function handleSubmit(e) {
  // Prevent the browser from reloading the page
  e.preventDefault();

  // Read the form data
  const form = e.target;
  const formData = new FormData(form);

  // Or you can work with it as a plain object:  
  const formJson = Object.fromEntries(formData.entries());
  console.log(formJson); 
  console.log(Object.values(formJson));
  setInputName(Object.values(formJson.name));

  // Calls OpenWeather API to find weather in New York city.
  findWeather(formJson.name); 
}
if(weatherData != "") {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>    
      <div>
        <form method="post" onSubmit={handleSubmit}>
          <label>City Name: 
            <input type="text" 
            name="name" 
            defaultValue="" 
            />
            </label>
      
            <hr />
            <button type="submit">Find Weather: </button>
        </form>
      </div>
      <hr />
      <div>
        <h2>Weather Data</h2>      
        <h3>Location: {inputName}</h3>

        <table>
          <tbody>
          <tr>
            <td>Temp</td>
            <td>{weatherData.main.temp}</td>
          </tr>
          <tr>
            <td>Humidity</td>
            <td>{weatherData.main.humidity}</td>   
          </tr>
          <tr>
            <td>Wind Speed</td>
            <td>{weatherData.wind.speed}</td>   
          </tr>
          </tbody>
        </table>

      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
  }
  // When weather data is == ""
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>    
      <div>
        <form method="post" onSubmit={handleSubmit}>
          <label>City Name: 
            <input type="text" 
            name="name" 
            defaultValue="" 
            />
            </label>   
            <hr />       
            <button type="submit">Find Weather: </button>
        </form>
        <p>City: {inputName}</p>
      </div>
    </>
  )
}