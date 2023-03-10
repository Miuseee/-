import axios from 'axios'
import router from '../router/index'
const request = axios.create({
    baseURL: 'http://47.109.49.197:9090',

})
request.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        // console.log(config.headers);
        if (token) config.headers.token = `${token}`
        return config
    },
    (error) => Promise.reject(error)
)


request.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.request.status === 500)
            router.push('/')
        return Promise.reject(error)
    }
)
export default request