import axios from "axios";
import { Api, TIMEOUT } from "../config/api.config";

const http=axios.create({
    baseURL:Api,
  timeout:TIMEOUT
})
 export const HTTP={
get:http.get,
post:http.post,
delete:http.delete,
put:http.put
}

 const httpPrivate=axios.create({
    baseURL:Api,
  timeout:TIMEOUT,
    withCredentials:true
})


export const HttpPrive={
    get:httpPrivate.get,
    post:httpPrivate.post,
    delete:httpPrivate.delete,
    put:httpPrivate.put
    }