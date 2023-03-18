import axios from 'axios'

const request = axios.create({
    baseURL: "https://api.pokemontcg.io/v2",
    headers:{
        'X-Api-Key':"3136a8bf-06e4-416d-b4b3-adb2ba60bafe"
    }
});
request.interceptors.request.use(
    (config)=>{
        return config;
    },
    (error)=>{
        return Promise.reject(error)
    }
)

export default request;