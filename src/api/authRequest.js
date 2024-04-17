import axios from "axios";

const serverURL = process.env.REACT_APP_SERVER_URL;

console.log(serverURL);

const API = axios.create({baseURL: serverURL});

export const register = (formData) => API.post('/api/user/signup', formData);
export const login = (formData) => API.post('/api/user/login', formData);
export const googleAuth = (formData) => API.post('/api/user/googleAuth', formData);
