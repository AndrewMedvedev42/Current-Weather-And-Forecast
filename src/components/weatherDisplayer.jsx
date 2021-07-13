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
        dispatch(loadWeather("kiev"))
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
    border-radius: 25px;
    padding: 2rem;
    border: black dashed 5px;
`
const ForecastContainer = styled.div`
    border: black dashed 5px;
    border-radius: 25px;
    padding: 2rem;
`