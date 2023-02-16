import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/RyuzakL/Planets-Facts',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getPlanet(planet) {
    return api.get(`/${planet}`);
  },
};
