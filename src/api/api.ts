import axios from 'axios';

const createApi = () => {
  return axios.create({ baseURL: 'https://api.tvmaze.com' });
};

export const applicationApi = createApi();
