import { useEffect, useState } from "react";

// It defaults to São Paulo, Brazil
const defaultLocation = {
	latitude: -23.55052,
	longitude: -46.633309,
};

export const useLocation = () => {
	const [location, setLocation] = useState<Pick<GeolocationCoordinates, "latitude" | "longitude">>(defaultLocation);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			(position) => { setLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude }); },
			() => { setLocation(defaultLocation); }
		);
	}, []);

	return { location, setLocation };
};
