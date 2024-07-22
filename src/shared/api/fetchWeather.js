export const fetchCurrentCity = async (city) => {
    try {
        const url_coords = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${import.meta.env.VITE_APP_ID}`;
        const response_coords = await fetch(url_coords);
        const data_coords = await response_coords.json();

        return data_coords ? data_coords : null;
    } catch (error) {
        return null;
    }
}

export const fetchCurrentCityWeather = async (city, state, country, lang) => {
    try {

        const url_coords = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=5&appid=${import.meta.env.VITE_APP_ID}`;
        const response_coords = await fetch(url_coords);
        const data_coords = await response_coords.json();

        const url_weather = `https://api.openweathermap.org/data/2.5/weather?lat=${data_coords[0].lat}&lon=${data_coords[0].lon}&appid=${import.meta.env.VITE_APP_ID}&lang=${lang}&units=metric`;
        const response_weather = await fetch(url_weather);
        const data_weather = await response_weather.json();

        return data_weather ? data_weather : null;
    } catch (error) {
        return null;
    }
}

export const fetchFiveDaysWeather = async (city, state, country, lang) => {
    try {

        const url_coords = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=5&appid=${import.meta.env.VITE_APP_ID}`;
        const response_coords = await fetch(url_coords);
        const data_coords = await response_coords.json();

        const url_weather = `http://api.openweathermap.org/data/2.5/forecast?lat=${data_coords[0].lat}&lon=${data_coords[0].lon}&appid=${import.meta.env.VITE_APP_ID}&lang=${lang}&units=metric`;
        const response_weather = await fetch(url_weather);
        const data_weather = await response_weather.json();

        return data_weather ? data_weather : null;
    } catch (error) {
        return null;
    }
}