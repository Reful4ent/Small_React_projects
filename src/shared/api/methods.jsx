
const fetchCurrentWeather = async (city,country, lang) => {
    try {
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=5&appid=${import.meta.env.VITE_APP_ID}`;

        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export default fetchCurrentWeather;