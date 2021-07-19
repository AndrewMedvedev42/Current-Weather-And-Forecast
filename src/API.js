//CURRENT WEATHER API
export const currentWeatherURL = (city_name) => `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_USER_API_KEY}&q=${city_name}&aqi=no`
//WEATHER FORECAST API
export const weatherForecastURL = (city_name) => `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_USER_API_KEY}&q=${city_name}&days=6&aqi=no&alerts=no`

export const getCountryURL = (country_name) => `https://restcountries.eu/rest/v2/name/${country_name}`