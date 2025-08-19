import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const loginUser = (data) => api.post("/user/login", data);
export const signupUser = (data) => api.post("/user/signup", data);

export default api;
