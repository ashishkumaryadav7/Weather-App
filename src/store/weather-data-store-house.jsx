import { createContext, useEffect, useReducer } from "react";
export const WeatherContext = createContext({
  cityValue: () => {},
  weatherData: {
    temperatureValue: null,
    weatherMessageValue: null,
    weatherIcon: null,
    humidityValue: null,
    visibilityValue: null,
    airPressureValue: null,
    windStatusValue: null,
    cityNameValue: null,
    dateValue: null,
    timeZoneValue: null,
  },
  loadingSpinerValue: null,
  dataNotFound: null,
});

const initialValue = {
  city: "varanasi",
  weatherData: {
    temperatureValue: null,
    weatherMessageValue: null,
    weatherIcon: null,
    humidityValue: null,
    visibilityValue: null,
    airPressureValue: null,
    windStatusValue: null,
    cityNameValue: null,
    dateValue: null,
    timeZoneValue: null,
  },
  loadingSpinerValue: true,
  dataNotFound: null,
};

const cityValReducer = (currentSate, action) => {
  if (action.type === "CITY_NAME_VALUE") {
    return { ...currentSate, city: action.payload };
  } else if (action.type === "SET_WEATHER_DATA") {
    return {
      ...currentSate,
      weatherData: action.payload,
      loadingSpinerValue: false,
      dataNotFound: null,
    };
  } else if (action.type === "LOADING_SPINER") {
    return { ...currentSate, loadingSpinerValue: action.payload };
  } else if (action.type === "DATA_NOT_FOUND") {
    return {
      ...currentSate,
      loadingSpinerValue: false,
      dataNotFound: action.payload,
    };
  } else {
    return currentSate;
  }
};

const WeatherDataProvider = ({ children }) => {
  // useReducer Hooks

  const [reducerState, dispatchtNewState] = useReducer(
    cityValReducer,
    initialValue
  );

  const cityValue = (cityName) => {
    dispatchtNewState({
      type: "CITY_NAME_VALUE",
      payload: cityName,
    });
  };
  // let loadingSpinerValue = true;
  useEffect(() => {
    dispatchtNewState({
      type: "LOADING_SPINER",
      payload: true,
    });
    const urlVal = `https://api.openweathermap.org/data/2.5/weather?q=${
      reducerState.city
    }&appid=${import.meta.env.VITE_APP_ID}&units=metric`;
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(urlVal, { signal })
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === "404") {
          dispatchtNewState({
            type: "DATA_NOT_FOUND",
            payload: "No result found",
          });
        } else {
          dispatchtNewState({
            type: "SET_WEATHER_DATA",
            payload: {
              temperatureValue: data.main.temp,
              weatherMessageValue: data.weather[0].main,
              weatherIcon: data.weather[0].icon,
              humidityValue: data.main.humidity,
              visibilityValue: data.visibility,
              airPressureValue: data.main.pressure,
              windStatusValue: data.wind.speed,
              cityNameValue: reducerState.city,
              dateValue: data.dt,
              timeZoneValue: data.timezone,
            },
          });
        }
      })
      .catch(() => {});
    return () => {
      controller.abort();
    };
  }, [reducerState.city]);

  return (
    <WeatherContext.Provider
      value={{
        cityValue: cityValue,
        weatherData: reducerState.weatherData,
        loadingSpinerValue: reducerState.loadingSpinerValue,
        dataNotFound: reducerState.dataNotFound,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherDataProvider;
