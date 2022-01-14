const State = {
    currentWeather:[],
    weatherForecast:[],
    countryDetails:[],
    isLoading:true,
    isFailedToFetchData:false
}

export const weatherReducer = (state=State, action) => {
    switch (action.type){
        case "FETCH_WEATHER":
            return {...state, currentWeather:action.payload.current,
                                weatherForecast:action.payload.forecast,
                                    isFailedToFetchData:false,
                                    isLoading:false}
        case "IS_LOADING":
            return {...state, isLoading:true}

        case "FAILED_TO_FETCH_DATA":
            return {...state, 
                isFailedToFetchData:true,
                    isLoading:false}
        default:
            return {...state}
    }
}