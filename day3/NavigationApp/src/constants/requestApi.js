import axios from "axios";

const instance = axios.create({
  baseURL: "https://dummyjson.com",
});

export default instance;
