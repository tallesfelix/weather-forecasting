import styles from './location-autocomplete.module.css';
import { useLocationAutocomplete } from "../../hooks/use-location-autocomplete";

type Coordinates = {
	latitude: number
	longitude: number
}

type LocationAutocompleteProps = {
	setLocation: React.Dispatch<React.SetStateAction<Coordinates>>
}

export const LocationAutocomplete = ({ setLocation }: LocationAutocompleteProps) => {
	const {
		onInputChange,
		handleSelect,
		value,
		ready,
		status,
		data,
	} = useLocationAutocomplete({ setLocation });

	return (
		<div className={styles.container}>
			<input
				type='text'
				placeholder='Search for another location'
				className={styles.searchInput}
				onChange={onInputChange}
				value={value}
				disabled={!ready}
			/>
			{status === "OK" && (
				<ul className={styles.suggestions}>
					{data.map((suggestion) => {
						const { place_id, description } = suggestion;
						return (
							<li key={place_id} onClick={() => handleSelect(suggestion)}>
								{description}
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};