import axios from "axios";

const serverURL = process.env.REACT_APP_SERVER_URL;

console.log(serverURL);

const API = axios.create({baseURL: serverURL});

export const getElon = (id) => {
    const token = JSON.parse(localStorage.getItem("token"));
    return API.get(`/api/elon/${id}`, { headers: { token } });
}





export const addElon = (formData) => {
    const token = JSON.parse(localStorage.getItem("token"));
    return API.post(`/api/elon`, formData ,{ headers: { token } });
}
export const deleteElon = (elonId) => {
    const token = JSON.parse(localStorage.getItem("token"));
    return API.delete(`/api/elon/${elonId}`, { headers: { token } });
}

export const updateElon = (id, formData) => {
    const token = JSON.parse(localStorage.getItem("token"));
    return API.put(`/api/elon/${id}`,formData, { headers: { token } });
}