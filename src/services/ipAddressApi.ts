import axios from "axios";

// ip address tracker api
const ipAddressApi = axios.create({
    baseURL: `https://geo.ipify.org/api/v2/country,city?apiKey=at_L60UxI6quiqEPmVKHQIXUxVaI8hYa&ipAddress=8.8.8.8`
})

export default ipAddressApi
