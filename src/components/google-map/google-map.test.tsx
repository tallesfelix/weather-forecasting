import { render, screen } from '@testing-library/react';
import { Map } from './google-map.component';

global.google = { maps: { Map: jest.fn(), Marker: jest.fn() } } as unknown as typeof google;

describe('GoogleMap', () => {
  test.skip('renders GoogleMap component', () => {
    const { asFragment } = render(<Map
      lat={0}
      lng={0}
      weatherToday={{
        conditions: 'Snow',
        tempmin: 0,
        tempmax: 4,
        date: '2021-01-01',
        icon: 'snow'
      }}
      setLocation={jest.fn()}
    />);
    expect(screen.getByText(/Snow/i)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
