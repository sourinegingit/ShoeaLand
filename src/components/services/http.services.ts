import axios from "axios";
import { BASE_URL, TIMEOUT } from "../config/api.config";

const http=axios.create({
    baseURL:BASE_URL,
    timeout:TIMEOUT
})
 export const HTTP={
get:http.get,
post:http.post,
delete:http.delete,
put:http.put
}

 const httpPrivate=axios.create({
    baseURL:BASE_URL,
    timeout:TIMEOUT,
    withCredentials:true
})


export const HttpPrive={
    get:httpPrivate.get,
    post:httpPrivate.post,
    delete:httpPrivate.delete,
    put:httpPrivate.put
    }