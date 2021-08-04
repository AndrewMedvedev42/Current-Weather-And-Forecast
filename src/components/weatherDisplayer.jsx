import React from 'react';
import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import {loadWeather} from "../actions/weatherActoin"
import {ForeCastCard} from "./forecastCard"
import styled from "styled-components"
import { FiSun } from "react-icons/fi";
import FadeIn from 'react-fade-in';
import {CountryFlag} from "./CountryFlag"

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
                <FadeIn>
                <section className="MainContainer">
                    <CurrentWeatherContainer className="CurrentWeatherContainer">
                    <h1 className="centerTitle">Current weather</h1>
                        <FadeIn>
                        <div>
                            <div className="countryData">
                                <h2>{CurrentWeather.data.location.country}</h2>
                                <CountryFlag country_name={CurrentWeather.data.location.country}/>
                            </div>
                            <h1>{CurrentWeather.data.location.name}</h1>
                            <h3>{CurrentWeather.data.location.localtime}</h3>
                        </div>
                        <div>
                            <h2>{CurrentWeather.data.current.condition.text}</h2>
                            <img id="icon" src={CurrentWeather.data.current.condition.icon} alt="" />
                        </div>
                        <div>
                            <p>Temp: {CurrentWeather.data.current.temp_c} C</p>
                            <p>Wind: {CurrentWeather.data.current.wind_kph} km/h</p>
                        </div>
                        </FadeIn>
                    </CurrentWeatherContainer>
                    <ForecastContainer className="ForecastContainer">
                    <FadeIn>
                        <h1 className="centerTitle">Forecast for {CurrentWeather.data.location.name}</h1>
                        <section className="DailyForecast">
                            {Forecast.data.forecast.forecastday.map((item)=>{
                                const {date, date_epoch, day, astro, hour} = item
                                return <ForeCastCard key={date_epoch} date={date} data={day} weatherByHours={hour}/>
                            })}
                        </section>
                    </FadeIn>
                    </ForecastContainer>
                </section>
                </FadeIn>
            ):(<LoadingMessage>
                <FiSun id="iconAnimate" size={150}/>
                <h1>The weather is loading!</h1>
                <h4>if the page won't load that means that server isn't responding</h4>
                <h3>Try to fill your input correctly or reload page.</h3>
            </LoadingMessage>)}
        </section>
    )
}

const LoadingMessage = styled.div`
    color: #0086b3;
    height: 50vh;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const CurrentWeatherContainer = styled.div`
    margin: 1rem;
    padding: 1rem;
    border: #1ac6ff solid 1rem;
    border-radius: 2rem;
    box-shadow:#0086b3 0.5rem 0.5rem 0px;
`
const ForecastContainer = styled.div`
    margin: 1rem;
    padding: 1rem;
    border: #1ac6ff solid 1rem;
    border-radius: 2rem;
    box-shadow:#0086b3 0.5rem 0.5rem 0px;
`