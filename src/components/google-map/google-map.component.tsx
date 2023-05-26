import { GoogleMap, MarkerF } from '@react-google-maps/api';
import styles from './google-map.module.css';
import { WeatherCard } from '../weather-card/weather-card.component';
import { useState } from 'react';

type Coordinates = {
	latitude: number
	longitude: number
}

interface MapProps {
	lat: number,
	lng: number,
	weatherToday: {
		conditions: string,
		tempmin: number,
		tempmax: number,
		date: string,
		icon: string,
	},
	setLocation: React.Dispatch<React.SetStateAction<Coordinates>>
}

export const Map = ({ lat, lng, weatherToday, setLocation }: MapProps) => {
	const [showWeatherCard, setShowWeatherCard] = useState(true);

	const onClick = () => {
		setShowWeatherCard(!showWeatherCard);
	};

	const onPositionChanged = (e: google.maps.MapMouseEvent) => {
		const lat = e.latLng?.lat();
		const lng = e.latLng?.lng();
		if (lat && lng) {
			setLocation({ latitude: lat, longitude: lng });
		}
	};

	return (
		<section className={styles.map}>
			<GoogleMap
				mapContainerStyle={{ width: '100%', height: '100%' }}
				zoom={12}
				center={{ lat, lng }}
			>
				<MarkerF position={{ lat, lng }} onClick={onClick} cursor='pointer' draggable onDragEnd={onPositionChanged} />
				{showWeatherCard && weatherToday && (
					<WeatherCard
						variant='today'
						conditions={weatherToday.conditions}
						tempMin={weatherToday.tempmin}
						tempMax={weatherToday.tempmax}
						date={weatherToday.date}
						icon={weatherToday.icon}
					/>
				)}
			</GoogleMap>
		</section>
	);
};
