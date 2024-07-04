import React, { useContext } from "react";
import { WeatherContext } from "../../store/weather-data-store-house";

const DataNotFound = () => {
  const { dataNotFound } = useContext(WeatherContext);
  return (
    <div>
      <div className="data-not-found-message text-center h4">
        {dataNotFound}
      </div>
    </div>
  );
};

export default DataNotFound;
