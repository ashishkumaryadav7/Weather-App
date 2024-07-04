import React, { useContext } from "react";
import { WeatherContext } from "../../store/weather-data-store-house";
const Visibility = () => {
  const { weatherData } = useContext(WeatherContext);
  return (
    <div className="hilight-value-box text-center bg-color rounded">
      <div className="h5 mt-4">{"Visibility"}</div>
      <div className="values mt-3">
        <span>
          <h3 className="d-inline">{weatherData.visibilityValue / 1000}</h3>
        </span>
        <span>miles</span>
      </div>
    </div>
  );
};

export default Visibility;
