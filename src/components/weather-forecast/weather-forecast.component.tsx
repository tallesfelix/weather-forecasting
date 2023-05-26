import { LocationAutocomplete } from '../location-autocomplete/location-autocomplete.component';
import { WeatherCard } from '../weather-card/weather-card.component';
import styles from './weather-forecast.module.css';

type Coordinates = {
  latitude: number;
  longitude: number;
}

type WeatherToday = {
  conditions: string;
  tempmin: number;
  tempmax: number;
  date: string;
  icon: string;
}

type WeatherForecastProps = {
  setLocation: React.Dispatch<React.SetStateAction<Coordinates>>;
  weather: WeatherToday[];
}

export const WeatherForecast = ({ weather, setLocation }: WeatherForecastProps) => {
  return (
    <section className={styles.footer}>
      <div className={styles.footerContainer}>
        <LocationAutocomplete setLocation={setLocation} />
        <ul className={styles.timesForecasting}>
          {weather && weather.map((day) => (
            <li key={day.date}>
              <WeatherCard
                conditions={day.conditions}
                tempMin={day.tempmin}
                tempMax={day.tempmax}
                date={day.date}
                icon={day.icon}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};