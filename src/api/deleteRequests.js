import axios from "axios";

const serverURL = process.env.REACT_APP_SERVER_URL;

console.log(serverURL);

const API = axios.create({baseURL: serverURL});

export const deleteAll = (id) => {
    const token = JSON.parse(localStorage.getItem("token"));
    return API.delete(`/api/:${id}`, { headers: { token } });
}


export const getAllUsers = () => API.get(`/api/user`);

export const getUser = (id) => API.get(`/api/user/${id}`);

