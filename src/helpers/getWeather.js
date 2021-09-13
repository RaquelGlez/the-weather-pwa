
export const getWeather = async ( cityName ) => {
      
    const weatherID = process.env.REACT_APP_WEATHER_ID;
    const urlString =
    "https://api.openweathermap.org/data/2.5/weather?units=metric";

    const weatherURL = `${urlString}&appid=${weatherID}&q=${encodeURI(cityName)}`;
   // console.log("urlString", weatherURL);

    const res = await fetch(weatherURL);
    console.log("resultado del fetch original", res);

    if(!res.ok){
      const { url, status, statusText } = res;
      if (status === 400) {
        const err = 400
        throw err
      } else {
        throw Error(`${status} ${statusText} in fetch ${url}`)
      }
    }

    const weatherData = await res.json()
  //  console.log("weatherData fetch",weatherData);

    const weather = {
      temperature: weatherData.main.temp,
      city: weatherData.name,
      descriptionId: weatherData.weather[0].id,
      description: weatherData.weather[0].description,
      cloudy: weatherData.clouds.all,
      humidity: weatherData.main.humidity,
      wind:weatherData.wind.speed
    }

    console.log("weather arreglo propio", weather);

    return weather;
};