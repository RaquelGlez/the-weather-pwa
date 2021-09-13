import React from 'react'
import { getWeatherDescription } from '../helpers/getWeatherDescription';

export const WeatherMain = (detail) => {
    const {city, description, descriptionId, temperature} = detail.detail

    return (
        <div className="weatherMain__container">
            <p className="weatherMain__temp">{`${Math.round(temperature)}°`}</p>
            <p className="weatherMain__city">{city}</p>
            <div className="weatherMain__description">
                <div className="weatherMain__description-icon">{getWeatherDescription(descriptionId)}</div>
                <p className="weatherMain__description-text">{description}</p>
            </div> 
        </div>
    )
}