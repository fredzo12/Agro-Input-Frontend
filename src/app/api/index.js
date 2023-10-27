import axios from "axios";

const responseBody = (response) => response.data
axios.defaults.baseURL = 'https://agrostore-26a8411a8b15.herokuapp.com/api'
axios.interceptors.request.use(
    function (config){
        const token = sessionStorage.getItem('token');
        if(token)
        { 
            config.headers["Authorization"] = `Bearer ${token}`
        }
        return config;
    },
    function (error){
        return Promise.reject(error);
    }
);

const request = {
    get:(url, params)=>axios.get(url, {params}).then(responseBody),
    post:(url, body) => axios.post(url, body).then(responseBody),
    put: (url, body)=>axios.put(url,body).then(responseBody),
    delete: (url, params)=>axios(url,{params}).then(responseBody)
}

const Account = {
    register:(body)=>request.post("/registration", body),
    getToken:(body)=>request.post("/otp-generation", body),
    login:(body)=>request.post("/login", body),
}

const farmerRequest = {
    makeRequest: (body) => request.post("/send-request", body),
    requestsList: () => request.get("/get-request-farmer"),
    requestDecline:(id)=>request.get(`/decline-request/${id}`),
    requestApprove:(id)=>request.get(`/approve-request/${id}`),
}

const Agent = {
    Account,farmerRequest
}

export default Agent

