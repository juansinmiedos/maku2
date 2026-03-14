import axios from "axios"
const baseURL = "http://localhost:3000/api"
const headers = {
  "Content-Type": "application/json",
}

const MainService = axios.create({
  baseURL,
  headers,
  withCredentials: true,
})

export { MainService }
