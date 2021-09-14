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
        iconWeather = weatherIcons.thunderstorm
    } else if(range(300,321).includes(id)){
        iconWeather = weatherIcons.drizzle
    } else if(range(500,531).includes(id)){
        iconWeather = weatherIcons.rain
    } else if(range(600,622).includes(id)){
        iconWeather = weatherIcons.snow
    } else if(range(700,781).includes(id)){
        iconWeather = weatherIcons.fog
    } else if(id===800){
        iconWeather = weatherIcons.sun
    } else if(range(801,804).includes(id)){
        iconWeather = weatherIcons.clouds
    } else{
        iconWeather = weatherIcons.cloud;
    }

    return iconWeather;
}