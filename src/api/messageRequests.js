import axios from "axios";

const serverURL = process.env.REACT_APP_SERVER_URL;

console.log(serverURL);

const API = axios.create({baseURL: serverURL});

export const getMessageges = (id) => {
    const token = JSON.parse(localStorage.getItem("token"));
    return API.get(`/api/message/${id}`, { headers: { token } });
}

export const addMessage = (formData) => {
    const token = JSON.parse(localStorage.getItem("token"));
    return API.post(`/api/message`, formData ,{ headers: { token } });
}
export const deleteMessage = (messageId) => {
    const token = JSON.parse(localStorage.getItem("token"));
    return API.delete(`/api/message/${messageId}`, { headers: { token } });
}

export const updateMessage = (id, formData) => {
    const token = JSON.parse(localStorage.getItem("token"));
    return API.put(`/api/message/${id}`,formData, { headers: { token } });
}