import axios from "axios";
import qs from "qs";
import dotenv, { config } from "dotenv"
import { LocalStorage } from "node-localstorage";
import console from "../helper/console"
import https from "https"

dotenv.config();
global.localStorage = new LocalStorage("./storage");

const testBase = axios.create({
    baseURL: process.env.BASEURL,
    headers: {
        Accept: "application/json",
        ContentType: "application/json"
    },

    transformRequest: [
        function (data) {
            return qs.stringify(data)
        }
    ],

    validateStatus:
        function () {
            return true;
        }
});

testBase.interceptors.request.use((config) => {
    let token = localStorage.getItem('token')
    const agent = new https.Agent({
        rejectUnauthorized: false
    })

    if (token) {
        config.headers.Authorization = `${token}`
    }
    if (agent) {
        config.httpsAgent = agent
    }
    
    return config;
},
    err => {
        return Promise.reject(err)
    })

testBase.interceptors.response.use(
    (res) => {
    console(res)
    return res
    }, 
    (err) => Promise.reject(err.message)  
);

export default testBase;