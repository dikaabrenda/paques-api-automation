import axios from "axios";
import dotenv from 'dotenv';
import { LocalStorage } from "node-localstorage";

dotenv.config();
global.localStorage = new LocalStorage();

const telegram = axios.create({
    baseURL: process.env.TELEGRAM_URL,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },

    transformRequest: [
        (data) => JSON.stringify(data)
    ],

    validateStatus:
        () => true
});

telegram.interceptors.response.use(
    (res) => {
        return res;
    },
    (err) => {
        Promise.reject(err.message)
    }
);

export default telegram;