import React, { useState, useEffect } from "react";
import { Loader } from "./Loader";
import { Message } from "./Message";
import { WeatherForm } from "./WeatherForm";
import { WeatherMain } from "./WeatherMain";
import { WeatherData } from "./WeatherData";
import { getWeather } from "../helpers/getWeather";

export const WeatherManager = () => {
  const [search, setSearch] = useState("Mexico");
  const [weatherDetail, setWeatherDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorFetch, setErrorFetch] = useState(400);
  const [error, setError] = useState(null);

  useEffect(() => {
    getWeatherDetail(search);
  }, [search]);

  const handleSearch = (data) => {
    setSearch(data);
  };

  const getWeatherDetail = (search) => {
    setLoading(true);
    getWeather(search)
      .then((weather) => {
        setWeatherDetail(weather);
        setError("");
        setErrorFetch("");
        setLoading(false);
      })
      .catch((err) => {
        if (err === 400) {
          setErrorFetch(err);
          setError("");
        } else {
          //setError("Error al actualizar el clima");
          setError("Unable to update weather")
          setErrorFetch("");
        }
        setLoading(false);
      });
  };

  return (
    <div className="manager__container">
      <h1 className="manager__title">the.weather</h1>
      {loading && (
        <div className="manager__loader">
          <Loader />
        </div>
      )}
      {!errorFetch &&
        (error ? (
          <div className="manager__message">
            <Message msg={error} bgColor="rgba(223, 92, 92, 0.4)" />
          </div>
        ) : (
          <div className="manager__weatherMain">
            <WeatherMain detail={weatherDetail} />
          </div>
        ))}
      <div className="manager__bg-right"></div>
      <div className="manager__section-form">
        <WeatherForm handleSearch={handleSearch} />
      </div>
      {!errorFetch && !error && (
        <div className="manager__weatherData">
          <WeatherData detail={weatherDetail} />
        </div>
      )}
    </div>
  );
};