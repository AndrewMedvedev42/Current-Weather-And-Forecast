import React from 'react';
import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import {loadWeather} from "../actions/weatherActoin"
import {ForeCastCard} from "./forecastCard"

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
                <section className="MainContainer">
                    <section className="CurrentWeatherContainer">
                        <div>
                            <h2>{CurrentWeather.data.location.country}</h2>
                            <h1>{CurrentWeather.data.location.name}</h1>
                            <h3>{CurrentWeather.data.location.localtime}</h3>
                        </div>
                        <div>
                            <h2>{CurrentWeather.data.current.condition.text}</h2>
                            <img src={CurrentWeather.data.current.condition.icon} alt="" />
                        </div>
                        <div>
                            <p>Temp: {CurrentWeather.data.current.temp_c} C</p>
                            <p>Wind: {CurrentWeather.data.current.wind_mph} C</p>
                        </div>
                    </section>
                    <section className="ForecastContainer">
                        {Forecast.data.forecast.forecastday.map((item)=>{
                            const {date, date_epoch, day, astro} = item
                            return <ForeCastCard key={date_epoch} date={date} data={day}/>
                        })}
                    </section>
                </section>
            ):console.log(null)}
        </section>
    )
}