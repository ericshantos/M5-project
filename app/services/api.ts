import axios from "axios";

export const api = axios.create({
  baseURL: "https://backendm5.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});
