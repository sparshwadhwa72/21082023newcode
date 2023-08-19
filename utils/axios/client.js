import axios from 'axios';

export const client = axios.create({
  withCredentials: true,
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFTOKEN',
  baseURL: 'https://kinbackend.herokuapp.com/',
});

export default client;
