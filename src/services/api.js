import axios from "axios"

export const api = axios.create({
  baseURL: "https://rocketnotes-rocket-api.herokuapp.com"
})