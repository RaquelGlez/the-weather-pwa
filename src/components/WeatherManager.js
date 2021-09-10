import React, {useState} from "react";
import { Loader } from "./Loader";
import { Message } from "./Message";

export const WeatherManager = () => {


  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)


  //const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=b9e5e789defa6dd8cb5acfa22f21efff&q=London#'
  const weatherID = process.env.REACT_APP_WEATHER_ID
  const weatherURL =
    "https://api.openweathermap.org/data/2.5/weather?units=metric";
  const fetchWeather = ({ cityName }) => {
    let urlString = `${weatherURL}&appid=${weatherID}&q=${cityName}`;
    console.log('urlString', urlString)
  };

  fetchWeather({cityName:"Paris"})

  return (
      <div>
          <div>weather manager</div>
          <div>input de busqueda del lugar</div>
          { !loading && <Loader/> }
          { !error && <Message msg="mensaje de error" bgColor="#dc3545"/> }
          <div>detalle del clima</div>
        
      </div>


      );     
};
