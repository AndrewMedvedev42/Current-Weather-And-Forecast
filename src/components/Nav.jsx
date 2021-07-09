import React from 'react';
import { useState } from "react";
import {useDispatch} from "react-redux"
import {loadWeather} from "../actions/weatherActoin"

export const Nav = () => {
    const dispatch = useDispatch()
    const [cityName, setCityName] = useState("")

    const onChange = (e) => {
        setCityName(e.target.value);
        console.log(e.target.value);
    }
    const submitAction = () => {
        dispatch(loadWeather(cityName))
    }
    return(
        <nav>
            <div>
                <input onChange={onChange} type="text" />
                <button value={cityName} type="submit" onClick={submitAction}>Click</button>
            </div>
        </nav>
    )
}