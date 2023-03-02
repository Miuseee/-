import axios from 'axios'
// import router from '../router/index'
const request = axios.create({
    baseURL: 'http://localhost:9090',

})
// request.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('token')
//         if (token) config.headers.Authorization = `Bearer ${token}`
//         return config
//     },
//     (error) => Promise.reject(error)
// )


// request.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         if (error.request.status === 500)
//             router.push('/login')
//         return Promise.reject(error)
//     }
// )
export default request