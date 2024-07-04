import React, { useContext } from "react";
import { WeatherContext } from "../../store/weather-data-store-house";

const AirPressure = () => {
  const { weatherData } = useContext(WeatherContext);
  return (
    <div className="hilight-value-box text-center bg-color rounded">
      <div className="h5 mt-4">{"Air Pressure"}</div>
      <div className="values mt-3">
        <span>
          <h3 className="d-inline">{weatherData.airPressureValue}</h3>
        </span>
        <span>mb</span>
      </div>
    </div>
  );
};

export default AirPressure;
