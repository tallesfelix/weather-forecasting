import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";

type Coordinates = {
	latitude: number
	longitude: number
}

type LocationAutocompleteProps = {
	setLocation: React.Dispatch<React.SetStateAction<Coordinates>>
}

export const useLocationAutocomplete = ({ setLocation }: LocationAutocompleteProps) => {
	const {
		ready,
		value,
		suggestions: { status, data },
		setValue,
		clearSuggestions
	} = usePlacesAutocomplete({
		debounce: 300,
	});

	const onInputChange = (e: any) => {
		setValue(e.target.value);
	};

	const handleSelect = ({ description }: google.maps.places.AutocompletePrediction) => {
		setValue(description, false);
		clearSuggestions();

		getGeocode({ address: description }).then((results) => {
			const { lat, lng } = getLatLng(results[0]);
			setLocation({ latitude: lat, longitude: lng });
		});
	};

	return {
		onInputChange,
		handleSelect,
		value,
		ready,
		status,
		data,
	};
};