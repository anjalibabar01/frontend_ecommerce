// import axios from "axios";

// const API_BASE_URL =
//   // process.env.NODE_ENV === "production"
//   //   ? "https://e-commerce-backend-production-0ce5.up.railway.app"
//   //   : "http://localhost:8080";

// const api = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Add a request interceptor to include token dynamically
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("jwt");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// export { api, API_BASE_URL };
// -----------------

import axios from "axios";

const API_BASE_URL =
  // process.env.NODE_ENV === "production"
  //   ? "https://e-commerce-backend-production-0ce5.up.railway.app"
  //   : "http://localhost:8080";
  "http://localhost:8080";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include token dynamically
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwt");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export { api, API_BASE_URL };