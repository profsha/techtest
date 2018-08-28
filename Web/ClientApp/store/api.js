import axios from 'axios'

axios.defaults.baseURL = '/'+ window.VueRouterUrl;

export default() => {
    return axios.create({
        baseURL: '/'+ window.VueRouterUrl,
        withCredentials: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}
