import axios from 'axios';

export const axiosInstance = axios.create({

    baseURL: "https://hollasocial.herokuapp.com/api"
})