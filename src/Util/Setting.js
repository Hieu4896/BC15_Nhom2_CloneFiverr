import React from "react";
import axios from "axios";
export const DOMAIN = "https://fiverr.cybersoft.edu.vn";
export const token = "tokenByClass";
export const tokenByClass =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNSIsIkhldEhhblN0cmluZyI6IjIwLzA2LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1NTY4MzIwMDAwMCIsIm5iZiI6MTYyNjI4MjAwMCwiZXhwIjoxNjU1ODMwODAwfQ.p47FFJpArherjwlM71xTzdulAQIW37pR6fRGD3t3Ji0";

// Cấu hình interceptor cho axios ( tất cả request gọi = axios đều được cấu hình) ( 1 dự án làm một lần duy nhất)
export const http = axios.create({
  baseURL: DOMAIN,
  timeout: 30000,
});

http.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      [token]: tokenByClass,
      // Authorization: "Bearer " + localStorage.getItem("accessToken"), //token mà người dùng đăng nhập(401 token khong hop le, 403 khong du   quyen truy cap)
    };
    return config;
  },
  (errors) => {
    return Promise.reject(errors);
  }
);
