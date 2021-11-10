import axios from "axios"
import {currentWeatherURL, weatherForecastURL} from "../API"

export const loadWeather = (city_name) => async (dispatch) => {
    dispatch({
        type:"IS_LOADING"
    })
    try {
        const currentWeather = await axios.get(currentWeatherURL(city_name))
        const weatherForecast = await axios.get(weatherForecastURL(city_name))

        dispatch({
            type:"FETCH_WEATHER",
            payload:{
                current: currentWeather,
                forecast: weatherForecast,
            }
        })
    } catch (err) {
        console.log(`ERROR ${err}`);
        dispatch({
            type:"FAILED_TO_FETCH_DATA",
        })
    }
}