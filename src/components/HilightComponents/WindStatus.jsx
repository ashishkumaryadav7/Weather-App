import React, { useContext } from "react";
import { WeatherContext } from "../../store/weather-data-store-house";

const WindStatus = () => {
  const { weatherData } = useContext(WeatherContext);
  return (
    <div className="hilight-value-box text-center rounded bg-color">
      <div className="h5 mt-4">{"Wind Status"}</div>
      <div className="values mt-3">
        <span>
          <h3 className="d-inline">{weatherData.windStatusValue}</h3>
        </span>
        <span>mph</span>
      </div>
    </div>
  );
};

export default WindStatus;
