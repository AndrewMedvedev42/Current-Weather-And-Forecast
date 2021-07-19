const State = {
    currentWeather:[],
    weatherForecast:[],
    countryDetails:[],
    isLoading:true
}

export const weatherReducer = (state=State, action) => {
    switch (action.type){
        case "FETCH_WEATHER":
            return {...state, currentWeather:action.payload.current,
                                weatherForecast:action.payload.forecast,
                                    isLoading:false}
        case "IS_LOADING":
            return {...state, isLoading:true}
        case "FETCH_COUNTRY":
            return {...state, countryDetails:[action.payload.country]}
        default:
            return {...state}
    }
}