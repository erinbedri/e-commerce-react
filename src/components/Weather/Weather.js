import React, { useState, useEffect } from "react";

export default function Weather() {
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [result, setResult] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });

            await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=e0933f3fd88281781aef985d97dbdf20&units=metric`
            )
                .then((res) => res.json())
                .then((result) => {
                    setResult(result);
                    console.log(result);
                });
        };

        fetchData();
    }, [lat, long]);

    console.log(result);

    return <div>{`Temp: ${result.main}`}</div>;
}
