import axios from "axios"
import {currentWeatherURL, weatherForecastURL, getCountryURL} from "../API"

export const loadWeather = (city_name) => async (dispatch) => {

    dispatch({
        type:"IS_LOADING"
    })

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

export const loadCounty = (country_name) => async (dispatch) => {
    const country = await axios.get(getCountryURL(country_name))
    dispatch({
        type:"FETCH_COUNTRY",
        payload:{
            country: country,
        }
    })
}