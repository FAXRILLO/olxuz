import axios from "axios";

const serverURL = process.env.REACT_APP_SERVER_URL;

console.log(serverURL);

const API = axios.create({ baseURL: serverURL });

export const updateAll = (id, data, { method }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  return API.put(`/api/${method}/:${id}`, data, { headers: { token } });
};
