import React from 'react'

export const WeatherData = (detail) => {

    const {cloudy, humidity, wind} = detail.detail

    return (
        <div className="weatherData_container">
            <div className="weatherData__item">
                <p>Cloudy</p>
                <p>{`${Math.round(cloudy)}%`}</p>
            </div >
            <div className="weatherData__item">
                <p>Humidity</p>
                <p>{`${Math.round(humidity)}%`}</p>
            </div>
            <div className="weatherData__item">
                <p>Wind</p>
                <p>{`${Math.round(wind)}km/h`}</p>
            </div>
        </div>
    )
}
