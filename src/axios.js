import axios from 'axios';
const url = new URL(window.location.href);
const host = `http://${url.host.slice(0, -4)}8080`;
const customAxios = axios.create({
    baseURL: host,

})
customAxios.interceptors.response.use(response => response, error => {
    const errorResponse = error.response
    return Promise.reject(errorResponse.data.message)
})

export default customAxios;