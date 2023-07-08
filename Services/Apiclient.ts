import axios from "axios";

// Create an Axios instance with a base URL
const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

export default apiClient;
