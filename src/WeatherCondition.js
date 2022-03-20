import React, { useEffect } from 'react';

const WeatherCondition = ({ result }) => {
    const [weatherState, setWeatherState] = React.useState("")
    useEffect(() => {
        if (result < 15) {
            return setWeatherState("Cold")
        } else if (result <= 30) {
            setWeatherState("Sunny")
        } else {
            setWeatherState("Hot")
        }
    }, [result]);
    return (
        <div className="pt-5 mt-5">
            <h1>{result}</h1>
            <h2>{weatherState}</h2>
        </div>
    );
};

export default WeatherCondition;