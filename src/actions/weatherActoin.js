import axios from "axios"
import {currentWeatherURL, weatherForecastURL} from "../API"

export const loadWeather = (city_name) => async (dispatch) => {
    //DESPATCHES LOADING SIDE-EFFECT
    dispatch({
        type:"IS_LOADING"
    })
    //REQUESTS WEATHER DATA
    //DISPACHES THE ERROR ACTION IF REQUEST FAILED 
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
    } catch (error) {
        console.log(`ERROR ${error}`);
        dispatch({
            type:"FAILED_TO_FETCH_DATA",
        })
    }
}