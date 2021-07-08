import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import {loadWeather} from "../actions/weatherActoin"

export const WeatherDisplayer = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadWeather("kiev"))
    },[dispatch])

    return(
        <section>
            <h1>Hello World</h1>
        </section>
    )
}