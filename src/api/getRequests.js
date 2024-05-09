import axios from "axios";

const serverURL = process.env.REACT_APP_SERVER_URL;

const API = axios.create({ baseURL: serverURL });

export const getProd = (method) => API.get(`/api/${method}`); 
export const getOneProd = (id, method) => API.get(`/api/${method}/${id}`); 
export const getSimilar = (method, name) => API.get(`/api/${method}`, {},{params: {name}}); 
