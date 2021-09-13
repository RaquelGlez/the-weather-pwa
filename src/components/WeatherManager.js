import React, {useState, useEffect} from "react";
import { Loader } from "./Loader";
import { Message } from "./Message";
import { WeatherForm } from "./WeatherForm";
import { WeatherMain } from "./WeatherMain";
import { WeatherData } from "./WeatherData";
import { getWeather } from "../helpers/getWeather";


export const WeatherManager = () => {

  const [search, setSearch] = useState('');
  const [weatherDetail, setWeatherDetail] = useState(null)
  const [loading, setLoading] = useState(false);
  const [errorFetch, setErrorFetch] = useState(400)
  const [error, setError] = useState(null);

  useEffect(() => {
    getWeatherDetail(search)
  }, [search])


  const handleSearch = (data) => {
    //console.log("data-busqueda del input:", data);
    setSearch(data)
  }

  const getWeatherDetail = (search)=>{
    setLoading(true)
    getWeather(search)
      .then(weather => {

        console.log("weather new recibido",weather);
        setWeatherDetail(weather);
        setError("")
        setErrorFetch("")
        setLoading(false);
       // console.log("error aun con el fetch", error);
      })
      .catch((err)=> {
        //.log("error en catch------", err);

        if(err===400){
          setErrorFetch(err)
          setError("")
         // console.log("error en catch code", errorFetch);
         // console.log("mensaje de error en 400", error);
        } else {
          setError("Error al actualizar el clima")
          setErrorFetch("")
          console.log( error);
        }

        
       // console.log(error);
        //setError("Unable to update weather")
        // if(){}
        console.log("error en catch code::", errorFetch);
        console.log("mensaje de error en 400::", error);
        setLoading(false)
      })
  } 


  return (
      <div className="manager__container">
          <h1 className="manager__title">the.weather</h1>
          { loading && <div className="manager__loader"><Loader/></div> }
          {
            !errorFetch &&
           (error ? 
              <div><Message msg={error} bgColor="#dc3545"/></div>  :
              (<div className="manager__weatherMain">
                <WeatherMain detail={weatherDetail}/>
              </div>))
          } 
        {/*   {
           error ? 
              <Message msg={error} bgColor="#dc3545"/>  :
              (!search==="" &&<div className="manager__weatherMain">
                <WeatherMain detail={weatherDetail}/>
              </div>)
          }  */}
        
          <div className="manager__section-form">
            <WeatherForm handleSearch={handleSearch}/>
          </div>
          { !errorFetch &&
          (!error &&  
            <div className="manager__weatherData">
              <WeatherData detail={weatherDetail}/> 
            </div>)
          }
      </div>
      );     
};
