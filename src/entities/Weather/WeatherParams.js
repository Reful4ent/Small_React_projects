const imgConverter = {
    "01d": "/public/icons/Weather%20Icons/clear-day.svg",
    "02d": "/public/icons/Weather%20Icons/partly-cloudy-day.svg",
    "03d": "/public/icons/Weather%20Icons/cloud.svg",
    "04d": "/public/icons/Weather%20Icons/cloudy.svg",
    "09d": "/public/icons/Weather%20Icons/rainy-7.svg",
    "10d": "/public/icons/Weather%20Icons/rainy-1-day.svg",
    "11d": "/public/icons/Weather%20Icons/severe-thunderstorm.svg",
    "13d": "/public/icons/Weather%20Icons/snow.svg",
    "50d": "/public/icons/Weather%20Icons/fog.svg",
    "01n": "/public/icons/Weather%20Icons/clear-night.svg",
    "02n": "/public/icons/Weather%20Icons/partly-cloudy-night.svg",
    "03n": "/public/icons/Weather%20Icons/cloud.svg",
    "04n": "/public/icons/Weather%20Icons/cloudy.svg",
    "09n": "/public/icons/Weather%20Icons/rainy-7.svg",
    "10n": "/public/icons/Weather%20Icons/rainy-1-night.svg",
    "11n": "/public/icons/Weather%20Icons/severe-thunderstorm.svg",
    "13n": "/public/icons/Weather%20Icons/snow.svg",
    "50n": "/public/icons/Weather%20Icons/fog.svg",
}

export const getImage = (imgId) => imgConverter[imgId];
