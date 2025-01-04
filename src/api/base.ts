import axios from "axios";
import { getCookies } from "../components/utils/getCookies";
import { Cookies } from "react-cookie";

export const Api = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials:true,
});
export default Api;

export const httpPrivate = axios.create({
  baseURL:"http://localhost:8000" ,
  timeout: 10000,
});


httpPrivate.interceptors.request.use(function (config) {
  const accessToken = getCookies()
  if (accessToken)
    config.headers.Authorization = `Bearer ${accessToken}`
  return config
})
const Cookie=new Cookies()

httpPrivate.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config
    const errorCode = error.response.status
    if (errorCode === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      // eslint-disable-next-line no-useless-catch
      try {
        const accessToken = await Api.post("/auth/refresh").then(({ data }) => {
          
          Cookie.set("shoeToken",accessToken)

          return data.accessToken
        })
        error.config.headers["Authorization"] = `Bearer ${accessToken}`
        return httpPrivate(originalRequest)
      } catch (refreshError) {
        throw refreshError;
      }
    }
    else if (errorCode === 403)
      window.location.href = "/login"
    else if (errorCode === 404)
      alert("Data not Found")
    else {
      alert("Unkown Error")
    }
    return Promise.reject(error);

  });
