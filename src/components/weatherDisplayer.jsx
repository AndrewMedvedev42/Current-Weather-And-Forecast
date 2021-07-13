import React from 'react';
import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import {loadWeather} from "../actions/weatherActoin"
import {ForeCastCard} from "./forecastCard"
import styled from "styled-components"

export const WeatherDisplayer = () => {

    const CurrentWeather = useSelector((state) => state.currentWeather)
    const Forecast = useSelector((state) => state.weatherForecast)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadWeather("kyoto"))
    },[dispatch])

    return(
        <section>
            {CurrentWeather.data ? (
                <section className="MainContainer">
                    <CurrentWeatherContainer className="CurrentWeatherContainer">
                    <h1 className="centerTitle">Current weather</h1>
                        <div>
                            <h2>{CurrentWeather.data.location.country}</h2>
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
                    </CurrentWeatherContainer>
                    <ForecastContainer className="ForecastContainer">
                        <h1 className="centerTitle">Forecast for {CurrentWeather.data.location.name}</h1>
                        <section className="ForecastSection">
                            {Forecast.data.forecast.forecastday.map((item)=>{
                                const {date, date_epoch, day, astro, hour} = item
                                return <ForeCastCard key={date_epoch} date={date} data={day} weatherByHours={hour}/>
                            })}
                        </section>

                    </ForecastContainer>
                </section>
            ):console.log(null)}
        </section>
    )
}

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