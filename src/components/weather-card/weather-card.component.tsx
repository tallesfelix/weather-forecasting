import { format } from 'date-fns';
import styles from './weather-card.module.css';
import { useEffect, useState } from 'react';

const loadIcon = async (iconName: string) => {
	const icon = await import(`../../assets/icons/${iconName}.svg`);
	return icon.default;
};

type WeatherCardProps = {
	conditions: string;
	tempMin: number;
	tempMax: number;
	date: string;
	icon: string;
	variant?: 'today' | 'forecast';
}

export const WeatherCard = ({ conditions, tempMin, tempMax, date, icon, variant = 'forecast' }: WeatherCardProps) => {
	const [iconUrl, setIconUrl] = useState<string>('');

	useEffect(() => {
		loadIcon(icon).then((icon) => setIconUrl(icon));
	}, [icon]);

	return (
		<div className={variant === 'forecast' ? styles.weatherCard : styles.todaysForecasting}>
			<div>
				<img src={iconUrl} alt={icon} />
				<p>{conditions}</p>
			</div>
			<div>
				<span>min. {tempMin}°C</span>
				<span>max. {tempMax}°C</span>
				<p>{format(new Date(`${date}T01:01`), 'd/L')}</p>
			</div>
		</div>
	);
};