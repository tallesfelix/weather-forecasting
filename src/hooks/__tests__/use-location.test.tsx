import { renderHook, act } from '@testing-library/react';
import { useLocation } from '../use-location';

describe('useLocation', () => {
  test('should return current location', () => {
    Object.defineProperty(global.navigator, 'geolocation', {
      value: {
        getCurrentPosition: jest.fn().mockImplementationOnce((success) => Promise.resolve(success({
          coords: {
            latitude: 10,
            longitude: 20
          }
        }))),
      },
    });

    const { result } = renderHook(() => useLocation());
    expect(result.current.location.latitude).toEqual(10);
    expect(result.current.location.longitude).toEqual(20);
  });

});