import axios from 'axios';


action = {
    url: "/bugs",
    method: "get",
    data: "",
    onSuccess: ""
}


const api = ({dispatch}) => next => async action =>{

    if(action.type!=="apiCallBegan")
        return next(action);

    const {url, method, data, onSuccess, onError} = action.payload

    try{
        const response = await axios.request({
            baseURL: "http://127.0.0.1:9001/api",
            url,
            method,
            data
        });
    }   
    catch(error){

    }

}

export default api;