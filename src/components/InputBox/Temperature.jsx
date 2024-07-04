import React, { useContext, useRef } from "react";
import { WeatherContext } from "../../store/weather-data-store-house";

const Temperature = () => {
  const cityRef = useRef();
  const { cityValue } = useContext(WeatherContext);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    cityValue(cityRef.current.value.trim());
    cityRef.current.value = "";
  };
  return (
    <>
      <div>
        <form onSubmit={handleOnSubmit}>
          <input
            ref={cityRef}
            className="input-city-box"
            type="text"
            placeholder="Enter Your City Name"
          />
        </form>
      </div>
    </>
  );
};

export default Temperature;
