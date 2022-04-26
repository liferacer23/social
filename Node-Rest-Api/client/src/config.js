import axios from 'axios';

export const axiosInstance = axios.create({

    baseURL: "https://hollasocial.heroku.com/api"
})