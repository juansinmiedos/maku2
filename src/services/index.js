import axios from "axios"
const baseURL = import.meta.env.VITE_API_BASE_URL
const headers = {
  "Content-Type": "application/json",
}

const MainService = axios.create({
  baseURL,
  headers,
  withCredentials: true,
})

export { MainService }
