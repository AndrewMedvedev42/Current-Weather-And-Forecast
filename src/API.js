//CURRENT WEATHER API
export const currentWeatherURL = (city_name) => `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_USER_API_KEY}&q=${city_name}&aqi=no`
//WEATHER FORECAST API
export const weatherForecastURL = (city_name) => `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_USER_API_KEY}&q=${city_name}&days=5&aqi=no&alerts=no`