import axios from 'axios';

const API_KEY = '4e7e44561ad0127ebef035bd0f8381db';
const ROOT_URL =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},bra`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
};
