import WeatherDataProvider from "./store/weather-data-store-house.jsx";
import Home from "./components/Home.jsx";

function App() {
  return (
    <WeatherDataProvider>
      <Home />
    </WeatherDataProvider>
  );
}

export default App;
