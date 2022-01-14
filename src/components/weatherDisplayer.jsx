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
        <section className="main-section">
            {!isLoading ? (
                <>
                <section className="weather-results-section">
                    <section className="section current-weather-section">
                        <h1 className="title center-title">Current weather</h1>
                        <h2 className="location-name">{CurrentWeather.data.location.name}</h2>
                        <h3 className="location-localtime">{CurrentWeather.data.location.localtime}</h3>
                        <h2 className="condition-text">{CurrentWeather.data.current.condition.text}</h2>
                        <img className="weather-icon" id="icon" src={CurrentWeather.data.current.condition.icon} alt="" />
                        <p className="temperature-text">Temp: {CurrentWeather.data.current.temp_c} C</p>
                        <p className="wind-speed">Wind: {CurrentWeather.data.current.wind_kph} km/h</p>
                    </section>

                    <section className="section forecast-section">
                        <h1 className="title">Forecast for {CurrentWeather.data.location.name}</h1>
                        <section className="forecast-list">
                            {Forecast.data.forecast.forecastday.map((item)=>{
                                const {date, date_epoch, day, hour} = item
                                return <ForeCastCard key={date_epoch} date={date} data={day} weatherByHours={hour}/>
                            })}
                        </section>
                    </section>

                    <section className="section app-details-section">
                            <p>Weather data provided by <a href="https://www.weatherapi.com/" rel="noreferrer" target="_blank"> weatherapi.com</a></p>
                    </section>
                </section>
                </>    

            ):(<section className="loading-message">
                <FiSun className="loading-icon" id="loading-icon" size={150}/>
                <h1 className="message">The weather is loading!</h1>
            </section>)}
        </section>
    )
}
