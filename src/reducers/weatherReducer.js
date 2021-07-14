const State = {
    currentWeather:[],
    weatherForecast:[],
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
        default:
            return {...state}
    }
}