import axios from "axios"
import {currentWeatherURL, weatherForecastURL} from "../API"

export const loadWeather = (city_name) => async (dispatch) => {
    const currentWeather = await axios.get(currentWeatherURL(city_name))
    const weatherForecast = await axios.get(weatherForecastURL(city_name))
    dispatch({
        type:"FETCH_WEATHER",
        payload:{
            current: currentWeather,
            forecast: weatherForecast,
        }
    })
}