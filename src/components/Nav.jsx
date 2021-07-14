import React from 'react';
import { useState } from "react";
import {useDispatch} from "react-redux"
import {loadWeather} from "../actions/weatherActoin"
import styled from "styled-components"

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
        <Navigation className="Nav">
            {/* <h1 className="centerTitle">Current weather and Forecast</h1> */}
            <div>
                <input onChange={onChange} type="text" />
                <button value={cityName} type="submit" onClick={submitAction}>Search</button>
            </div>
        </Navigation>
    )
}

const Navigation = styled.div`
    padding:1.5rem;
    .centerTitle{
            text-align: center;
        }
    div{
        display: flex;
        justify-content: center;
    }
    input, button{
        font-family: 'Exo 2', sans-serif;
        font-size:1.5rem;
        padding: 0.5rem 1.5rem;
        outline: none;
        border: none;
        box-shadow:#0086b3 0.5rem 0.5rem 0px;
    }
    input{
        width: 300px;
        border: #1ac6ff solid 0.5rem;
        border-top-left-radius: 2rem;
        border-bottom-left-radius: 2rem;
    }
    button{
        padding: 0.5rem 2rem;
        cursor: pointer;
        color: white;
        background-color: #1ac6ff;
        transition: 0.5s;
        font-weight: bolder;
        border-top-right-radius: 2rem;
        border-bottom-right-radius: 2rem;
    }
    button:hover{
        background-color: #00ace6;
        letter-spacing: 1px;
    }
`