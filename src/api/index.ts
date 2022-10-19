/* eslint no-param-reassign: 0 */

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://meetup-crud-api.herokuapp.com/',
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`;

  return config;
});

export default instance;
