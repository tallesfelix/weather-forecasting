import axios from 'axios';

export const baseURL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/';

const weatherAPI = axios.create({
  baseURL: baseURL,
  params: {
    key: process.env.REACT_APP_VISUAL_CROSSING_KEY,
    unitGroup: 'metric',
    contentType: 'json',
    iconSet: 'icons1',
  },
});

export default weatherAPI;