import Temperature from "./InputBox/Temperature.jsx";
import { GrLocation } from "react-icons/gr";
import TemperatureValue from "./ResultBox/TemperatureValue.jsx";
import WindStatus from "./HilightComponents/WindStatus";
import AirPressure from "./HilightComponents/AirPressure";
import Visibility from "./HilightComponents/Visibility";
import Humidity from "./HilightComponents/Humidity";
import { WeatherContext } from "../store/weather-data-store-house.jsx";
import LoadingSpiner from "./LoadingSpiner/LoadingSpiner.jsx";
import { useContext } from "react";

const Home = () => {
  const { loadingSpinerValue, dataNotFound } = useContext(WeatherContext);
  return (
    <div className="container">
      <div className="row d-flex justify-content-center  align-items-center ">
        <div className="heading-name mt-5 mb-5 d-flex justify-content-center align-items-center h1">
          Weather App
        </div>
        {loadingSpinerValue ? (
          <LoadingSpiner />
        ) : (
          <div className="row d-flex justify-content-center  align-items-center ">
            <div className="col-6 col-md-12 d-flex justify-content-center align-items-center box-1 flex-column">
              <div className="row input-strip  d-flex justify-content-center align-items-center">
                <div className="col-10">
                  <Temperature />
                </div>
                <div className="col-2 location-box  d-flex justify-content-center align-items-center">
                  <GrLocation />
                </div>
              </div>
              <TemperatureValue />
            </div>
            {dataNotFound ? null : (
              <div className="col-6 p-0 col-md-12 d-flex justify-content-center align-items-center box-2">
                <div className="container-fluid">
                  <div className="row p-0">
                    <div className="col-6 d-flex justify-content-center p-0">
                      <WindStatus />
                    </div>
                    <div className="col-6 d-flex justify-content-center p-0">
                      <Humidity />
                    </div>
                  </div>
                  <div className="row row mt-2 p-0 d-flex justify-content-center">
                    <div className="col-6 p-0 d-flex justify-content-center">
                      <Visibility />
                    </div>
                    <div className="col-6 p-0 d-flex justify-content-center">
                      <AirPressure />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
