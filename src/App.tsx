import styles from './App.module.css';
import { useLocation } from './hooks/use-location';
import { useLoadScript } from '@react-google-maps/api';
import { Libraries } from "@react-google-maps/api/dist/utils/make-load-script-url";
import { Map } from './components/google-map/google-map.component';

import { useWeather } from './hooks/use-weather';
import { WeatherForecast } from './components/weather-forecast/weather-forecast.component';

const libraries: Libraries = ['places'];

type WeatherToday = {
  conditions: string;
  tempmin: number;
  tempmax: number;
  date: string;
  icon: string;
}

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY as string,
    libraries,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return <Main />;
}

const today = new Date();
const maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 4);

function Main() {
  const { location, setLocation } = useLocation();
  const { weather } = useWeather({
    lat: location.latitude,
    lng: location.longitude,
    startDate: today.toISOString(),
    endDate: maxDate.toISOString()
  });
  const todaysWeather: WeatherToday = weather && weather[0];

  return (
    <main className={styles.main}>
      <Map
        lat={location.latitude}
        lng={location.longitude}
        weatherToday={todaysWeather}
        setLocation={setLocation}
      />
      <WeatherForecast
        setLocation={setLocation}
        weather={weather}
      />
    </main>
  );
}

export default App;
