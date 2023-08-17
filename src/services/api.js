import axios from "axios"
export const api = axios.create({
  baseURL: "https://food-explorer-back-end-by-silviocn.onrender.com"
  //baseURL: "http://localhost:3333"
})