import { render, screen } from '@testing-library/react';
import { WeatherForecast } from './weather-forecast.component';

describe('WeatherForecast', () => {
  test('renders WeatherForecast component', () => {
    const { asFragment } = render(<WeatherForecast
      setLocation={jest.fn()}
      weather={[
        {
          conditions: 'Snow',
          tempmin: 0,
          tempmax: 4,
          date: '2021-01-01',
          icon: 'snow'
        }
      ]}
    />);
    expect(screen.getByText(/Snow/i)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
