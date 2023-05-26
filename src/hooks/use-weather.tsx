import { useEffect, useState } from "react";
import weatherAPI from "../client/visual-crossing";

interface UseWeatherProps {
	lat: number;
	lng: number;
	startDate: string;
	endDate: string;
}

type ApiResponse = {
	days: {
		datetime: string;
		tempmax: number;
		tempmin: number;
		temp: number;
		conditions: string;
		icon: string;
	}[]
}

type WeatherToday = {
	conditions: string;
	tempmin: number;
	tempmax: number;
	date: string;
	icon: string;
}

export const useWeather = ({ lat, lng, startDate, endDate }: UseWeatherProps) => {
	const [weather, setWeather] = useState<WeatherToday[]>([]);

	useEffect(() => {
		weatherAPI<ApiResponse>({
			url: `/timeline/${lat},${lng}/${startDate}/${endDate}`,
		})
			.then((data) => {
				const daysForecast = data.data.days.map((day) => {
					return {
						date: day.datetime,
						tempmax: day.tempmax,
						tempmin: day.tempmin,
						temperature: day.temp,
						conditions: day.conditions,
						icon: day.icon,
					};
				});
				setWeather(daysForecast);
			});
	}, [lat, lng, startDate, endDate]);

	return { weather };
};