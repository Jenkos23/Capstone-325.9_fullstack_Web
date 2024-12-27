import React, {useEffect, useState} from "react";
import axios from "axios";
import DateTimeDisplay from "./DatetimeDisplay";
import { Spinner } from "react-bootstrap";


export default function FashWeather(){
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [fetchClicked, setFetchClicked] = useState(false);

    const fetchWeather = async() => {
        if(!city) return; //Prevent fetching if city is empty
        setLoading(false);
        setError("");
        setWeatherData(null); //Reset the weather data before fetching

      try {
        const response = await axios.get(
            `https://ezieke-jennifer-backend-capstone.onrender.com/weather/${city}`
        );
        setWeatherData(response.data); //update the state with fetched data

      } catch (error) {
        setError("Weather data cannot be retrieved. Please try again")
        
      }finally{
        setLoading(false); //set Loading state to false after fetch
      }
    };

   //Handle the button click to fetch weather data
   const handleButtonClick =()=> {
      setFetchClicked(true); //Set fetchedClicked to true when the button is clicked
       fetchWeather(); //Trigger the weather fetch
   };


    return(
        <>
        <DateTimeDisplay/>
        <div className="container mt-5">
        <h1 className="text-center">Fashion Weather</h1>
        <p className="styled-paragraph">Explore our Fashion Weather page, where we blend the latest weather updates with style advice to help you dress for any occasion, no matter the forecast. Whether it's a sunny day, a rainy afternoon, or a chilly evening, we provide tailored recommendations to ensure you're always dressed appropriately without sacrificing your fashion sense. From layering tips for cold weather to lightweight outfits for hot days, we offer practical advice to keep you stylish and comfortable. With our expert tips, you'll be ready to face any weather condition while looking your best and staying on trend."</p>
        <form className="mb-4"
           onSubmit={(e)=> {
            e.preventDefault();
            handleButtonClick(); // Trigger fetch when the form is submitted

        }}
        >

        <div className="input-group">
            <input
            type="text"
            className="form-control"
            placeholder="Enter city name"
            value={city}
            onChange={ (e)=> setCity(e.target.value) }
            />
            <button className="btn btn-primary" type="submit" disabled={loading}>
            Get Weather
           </button>

        </div> 
        </form>
        
        {error && <div className="alert alert-danger">{error}</div>}


        {fetchClicked && weatherData && (
        <div className="card">
          <div className="card-header">
            <h3>
              {weatherData.name}, {weatherData.sys.country}
            </h3>
            <p>{new Date(weatherData.dt * 1000).toLocaleString()}</p>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              Temperature: {Math.round(weatherData.main.temp - 273.15)}°C
            </h5>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Weather: {weatherData.weather[0].description}</p>
            <p>
              Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}
            </p>
            <p>
              Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
            </p>
            <p>Timezone: {weatherData.timezone}</p>
          </div>
        </div>
      )}


        </div>

        </>
    );
}