import React, { useContext } from "react";
import { WeatherContext } from "../../store/weather-data-store-house";

const Humidity = () => {
  const { weatherData } = useContext(WeatherContext);
  return (
    <div className="hilight-value-box bg-color text-center rounded ">
      <div className="h5 mt-4">{"Humidity"}</div>
      <div className="values mt-3">
        <span>
          <h3 className="d-inline">{weatherData.humidityValue}</h3>
        </span>
        <span>%</span>
      </div>
    </div>
  );
};

export default Humidity;
