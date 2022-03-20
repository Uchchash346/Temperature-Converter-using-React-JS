import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import WeatherCondition from './WeatherCondition';

function App() {
  const [input, setInput] = useState(0);
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);
  const [conditionInfo, setConditionInfo] = useState({})
  const getCelsius = (e) => {
    e.preventDefault();
    const result = ((input - 32) * 5) / 9;
    console.log(result)
    setCelsius(result)
  }

  const getFahrenheit = (e) => {
    e.preventDefault();
    const result = (input * 9) / 5 + 32;
    console.log(result)
    setFahrenheit(result)
  }


  return (
    <div className="container main-area">
      <div className="container input-group pt-5 main-area">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="search"
          className="form-control-sm"
          placeholder="Type your Number"
        />
        <button
          onClick={getCelsius}
          className="btn btn-outline-secondary"
          type="button">
          Celsius
        </button>
        <button
          onClick={getFahrenheit}
          className="btn btn-outline-secondary"
          type="button">
          Fahrenheit
        </button>
      </div>
      <WeatherCondition conditionInfo={conditionInfo} />
    </div>
  );
}

export default App;
