/* eslint-disable no-param-reassign */
import axios from 'axios';
import dotenv from 'dotenv';
import { LocalStorage } from 'node-localstorage';
import https from 'https';
// import console from '../helper/console';

dotenv.config();
global.localStorage = new LocalStorage('./storage');

const testBase = axios.create({
  baseURL: process.env.BASEURL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },

  transformRequest: [
    (data) => JSON.stringify(data),
  ],

  validateStatus:
    () => true,
});

testBase.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    const agent = new https.Agent({
      rejectUnauthorized: false,
    });

    if (agent) {
      config.httpsAgent = agent;
    }
    if (!token) {
      throw Error('token should not empty ' + token);
    } else {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err),
);

testBase.interceptors.response.use(
  (res) => {
    // console(res);
    return res;
  },
  (err) => Promise.reject(err.message),
);

export default testBase;
