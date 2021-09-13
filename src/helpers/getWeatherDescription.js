import { weatherIcons } from './weatherIcons'

const range = (start, end) => {
  const rangeArray = [];
  for (let i = start; i <= end; i++) {
    rangeArray.push(i);
  }
  return rangeArray;
};


export const getWeatherDescription = (id) => {    
    let iconWeather = ""

    if( range(200,232).includes(id)){
        console.log("el id esta en el rango 200")
        iconWeather = weatherIcons.thunderstorm
    } else if(range(300,321).includes(id)){
        console.log("el id esta en el rango 300")
        iconWeather = weatherIcons.drizzle
    } else if(range(500,531).includes(id)){
        console.log("el id esta en el rango 500")
        iconWeather = weatherIcons.rain
    } else if(range(600,622).includes(id)){
        console.log("el id esta en el rango 600")
        iconWeather = weatherIcons.snow
    } else if(range(700,781).includes(id)){
        console.log("el id esta en el rango 700")
        iconWeather = weatherIcons.fog
    } else if(id===800){
        console.log("el id es 800")
        iconWeather = weatherIcons.sun
    } else if(range(801,804).includes(id)){
        console.log("el id esta en el rango 800")
        iconWeather = weatherIcons.clouds
    } else{
        console.log("sin coincidencias en el if");
        iconWeather = weatherIcons.cloud;
    }

    console.log("icon", iconWeather);
    return iconWeather;
}