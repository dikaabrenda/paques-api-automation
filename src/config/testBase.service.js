/* eslint-disable no-param-reassign */
import axios from 'axios';
import qs from 'qs';
import dotenv from 'dotenv';
import { LocalStorage } from 'node-localstorage';
import https from 'https';
import console from '../helper/console';

dotenv.config();
global.localStorage = new LocalStorage('./storage');

const token = localStorage.getItem('token');

const testBase = axios.create({
  baseURL: process.env.BASEURL,
  headers: {
    Accept: 'application/json',
    ContentType: 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: `${token}`,
  },

  transformRequest: [
    (data) => qs.stringify(data),
  ],

  validateStatus() {
    return true;
  },
});

testBase.interceptors.request.use(
  (config) => {
    const agent = new https.Agent({
      rejectUnauthorized: false,
    });

    if (agent) {
      config.httpsAgent = agent;
    }
    return config;
  },
  (err) => Promise.reject(err),
);

testBase.interceptors.response.use(
  (res) => {
    console(res);
    return res;
  },
  (err) => Promise.reject(err.message),
);

export default testBase;
