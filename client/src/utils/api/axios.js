import axios from 'axios';

const axiosinstance = axios.create({
  baseURL: 'http://localhost:5000/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosinstance;
