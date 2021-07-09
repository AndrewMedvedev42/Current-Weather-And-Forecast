import React from 'react';
import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import {loadWeather} from "../actions/weatherActoin"

export const WeatherDisplayer = () => {

    const CurrentWeather = useSelector((state) => state.currentWeather)
    const Forecast = useSelector((state) => state.weatherForecast)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadWeather("kiev"))
    },[dispatch])

    return(
        <section>
            {CurrentWeather.data ? (
                <section>
                    <article>
                        <h2>{CurrentWeather.data.location.country}</h2>
                        <h1>{CurrentWeather.data.location.name}</h1>
                        <h3>{CurrentWeather.data.location.localtime}</h3>
                    </article>
                    <article>
                        <h2>{CurrentWeather.data.current.condition.text}</h2>
                        <img src={CurrentWeather.data.current.condition.icon} alt="" />
                    </article>
                    <article>
                        <p>Temp: {CurrentWeather.data.current.temp_c} C</p>
                        <p>Wind: {CurrentWeather.data.current.wind_mph} C</p>
                    </article>
                </section>
            ):console.log(null)}
        </section>
    )
}