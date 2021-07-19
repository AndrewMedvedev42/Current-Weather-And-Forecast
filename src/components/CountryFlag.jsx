import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux"
import {loadCounty} from "../actions/weatherActoin"

export const CountryFlag = ({country_name}) => {
    const dispatch = useDispatch()

    const country = useSelector((state) => state.countryDetails)

    useEffect(()=>{
        dispatch(loadCounty(country_name))
    },[dispatch])

    if(country[0]){
        return <img className="countryFlag" src={country[0].data[0].flag} alt="countryFlag" />
    }else{
        return <img src="" alt="" />
    }

}