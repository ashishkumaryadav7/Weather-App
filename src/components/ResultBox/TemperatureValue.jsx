import React, { useContext } from "react";
import { WeatherContext } from "../../store/weather-data-store-house";
import DataNotFound from "../ErrorMessage/DataNotFound";

const TemperatureValue = () => {
  const { weatherData, dataNotFound } = useContext(WeatherContext);

  // making first later in capital by using this function
  const properFunction = (props) => {
    if (props) {
      const arr = props.split(" ");
      const newArr = arr.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      });
      const result = newArr.join(" ");
      return result;
    }
  };
  // change the date & time human readible formate
  const formatDateTime = (timestamp, timezoneOffset) => {
    const date = new Date((timestamp + timezoneOffset) * 1000);
    return date.toLocaleDateString();
  };

  // for getting system time

  const getCurrentTime = () => {
    const date = new Date();
    const formattedTime = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return formattedTime;
  };

  return (
    <div className="container temp-value-container mt-2 rounded">
      {dataNotFound ? (
        <DataNotFound />
      ) : (
        <>
          <div className="city-name text-center h2 mt-1">
            {properFunction(weatherData.cityNameValue)}
          </div>
          <div className="temp-value mt-2 d-flex justify-content-center align-items-center ">
            <img
              className="icons"
              src={`https://openweathermap.org/img/wn/${weatherData.weatherIcon}@2x.png`}
              alt="icon"
            />
          </div>
          <div className="degree text-center h1 mt-1">
            {Math.floor(weatherData.temperatureValue)}°C
          </div>
          <div className="text-center fs-4">
            {weatherData.weatherMessageValue}
          </div>
          <div className="time container text-center mt-3 mb-2">
            {formatDateTime(weatherData.dateValue, weatherData.timeZoneValue)},{" "}
            {getCurrentTime()}
          </div>
        </>
      )}
    </div>
  );
};

export default TemperatureValue;
