import axios from "axios";
import dotenv from 'dotenv';
import console from '../helper/console.js'

dotenv.config();

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
        () => true,
});

telegram.interceptors.response.use(
    (res) => {
        console(res)
        return res;
    },
    (err) => {
        Promise.reject(err.message)
    }
);

export default telegram;