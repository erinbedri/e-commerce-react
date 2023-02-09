import React, { useState, useEffect } from "react";

import "./weather.css";

export default function Weather() {
    const [lat, setLat] = useState("");
    const [long, setLong] = useState("");
    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });

            if (lat !== "" && long !== "") {
                await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=e0933f3fd88281781aef985d97dbdf20&units=metric`
                )
                    .then((res) => res.json())
                    .then((weatherData) => {
                        setWeatherData(weatherData);
                    });
            }
        };

        fetchData();
    }, [lat, long]);

    console.log(weatherData);

    return (
        <div>
            {Object.keys(weatherData).length !== 0 ? (
                <div className="weather-wrapper">
                    <p>{weatherData.name}</p>
                    <img
                        src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                        alt="weather icon"
                    />
                    <p className="temp">
                        {Math.ceil(weatherData.main.temp)} &deg;C {weatherData.weather[0].description}
                    </p>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}
