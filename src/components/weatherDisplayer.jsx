import React from 'react';
import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import {loadWeather} from "../actions/weatherActoin"
import {ForeCastCard} from "./forecastCard"
import styled from "styled-components"
import { FiSun } from "react-icons/fi";
import FadeIn from 'react-fade-in';

export const WeatherDisplayer = () => {
    const CurrentWeather = useSelector((state) => state.currentWeather)
    const Forecast = useSelector((state) => state.weatherForecast)
    const isLoading = useSelector((state) => state.isLoading)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadWeather("kyoto"))
    },[dispatch])

    return(
        <section>
            {!isLoading ? (
                <section className="MainContainer">
                    <section className="CurrentWeatherContainer">
                        <h1 className="centerTitle">Current weather</h1>
                            <FadeIn>
                                <h1>{CurrentWeather.data.location.name}</h1>
                                <h3>{CurrentWeather.data.location.localtime}</h3>
                                <h2>{CurrentWeather.data.current.condition.text}</h2>
                                <img id="icon" src={CurrentWeather.data.current.condition.icon} alt="" />
                                <p>Temp: {CurrentWeather.data.current.temp_c} C</p>
                                <p>Wind: {CurrentWeather.data.current.wind_kph} km/h</p>
                            </FadeIn>
                        </section>
                        <section>
                            <p>Weather data provided by <a href="https://www.weatherapi.com/" rel="noreferrer" target="_blank">weatherapi.com</a></p>
                        </section>
                    <section className="ForecastContainer">
                        <h1 className="centerTitle">Forecast for {CurrentWeather.data.location.name}</h1>
                        <section className="DailyForecast">
                            {Forecast.data.forecast.forecastday.map((item)=>{
                                const {date, date_epoch, day, hour} = item
                                return <ForeCastCard key={date_epoch} date={date} data={day} weatherByHours={hour}/>
                            })}
                        </section>
                    </section>
                </section>
            ):(<section>
                <FiSun id="iconAnimate" size={150}/>
                <h1>The weather is loading!</h1>
                <h4>if the page won't load that means that server isn't responding</h4>
                <h3>Try to fill your input correctly or reload page.</h3>
            </section>)}
        </section>
    )
}
