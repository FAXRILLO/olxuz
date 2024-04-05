import axios from "axios";

const serverURL = process.env.REACT_APP_SERVER_URL;

console.log(serverURL);

const API = axios.create({baseURL: serverURL});

export const getAllUsers = () => API.get('api/user', formData);
export const getUser = (id) => API.get(`api/user/${id}`, formData);

export const updateUser = (id, formData) => {
    const token = JSON.parse(localStorage.getItem("token"));
    return API.put(`/api/user/${id}`,formData, { headers: { token } });
}

export const deleteUser = (id) => {
    const token = JSON.parse(localStorage.getItem("token"));
    return API.put(`/api/user/${id}`, { headers: { token } });
}