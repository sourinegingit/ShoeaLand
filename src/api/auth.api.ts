import { AxiosResponse } from "axios"
import { HTTP } from "../components/services/http.services"


export interface ILoginApiParams{
    username:string
    password:string
}
export interface ILoginApiResponse{
    message:string
    accessToken:string
    username:string
}
export const loginApi=async(data:ILoginApiParams):Promise<AxiosResponse<ILoginApiResponse>>=>{
return HTTP.post('/auth/login',data)
}