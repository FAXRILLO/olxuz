import axios from "axios";

const serverURL = process.env.REACT_APP_SERVER_URL;

console.log(serverURL);

const API = axios.create({ baseURL: serverURL });

export const getAll = ({ method }) => {
  return API.get(`/api/${method}`);
};

export const getOneProd = (id, { method }) => {
  return API.get(`/api/${method}/:${id}`);
};
