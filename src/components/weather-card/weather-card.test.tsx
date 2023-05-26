import { render, screen } from '@testing-library/react';
import { WeatherCard } from './weather-card.component';

describe('WeatherCard', () => {
  test('renders WeatherCard component', () => {
    const { asFragment } = render(<WeatherCard conditions="Snow" tempMin={0} tempMax={4} date="2021-01-01" icon="snow" />);
    expect(screen.getByText(/Snow/i)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});