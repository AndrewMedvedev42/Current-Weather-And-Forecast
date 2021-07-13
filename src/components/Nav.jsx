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
                <button value={cityName} type="submit" onClick={submitAction}>Click</button>
            </div>
        </Navigation>
    )
}

const Navigation = styled.div`
    margin: 2rem;
    .centerTitle{
            text-align: center;
        }
    div{
        display: flex;
        justify-content: center;
    }
    input, button{
        font-family: 'Exo 2', sans-serif;
        border: none;
        font-size:1.5rem;
        padding: 0.5rem 1.5rem;
        outline: none;
    }
    input{
        width: 300px;
        box-shadow: inset #0000003b 0px 0px 2px;
    }
    button{
        cursor: pointer;
        color: white;
        background-color: #1ac6ff;
        transition: 0.5s;
        font-weight: bolder;
    }
    button:hover{
        background-color: #00ace6;
        letter-spacing: 1px;
    }
`