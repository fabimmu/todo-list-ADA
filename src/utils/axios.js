import axios from "axios";

const api = axios.create({
  baseURL: "https://todoada-a060f-default-rtdb.firebaseio.com/",
});

api.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
api.defaults.headers.common["Content-Type"] = "application/json";

export { api };