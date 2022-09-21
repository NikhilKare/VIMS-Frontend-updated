import Authorization from "../Authorization";
import httpClient from "./http-common";

const getAllProviderPolicies=()=>{
   return httpClient.get(`/provider/${Authorization.getUser().userId}/policies`)
}

const addPolicy=(policy)=>{
   return httpClient.post(`/provider/${Authorization.getUser().userId}`,policy)
}

const deletePolicy=(id)=>{
   return httpClient.delete(`/provider/${Authorization.getUser().userId}/policies/${id}`)
}

const updatePolicy=(id)=>{
   return httpClient.put(`/provider/${id}`)
}
const getProvider=()=>{
   return httpClient.get(`/provider/${Authorization.getUser().userId}`)
}
export default {getAllProviderPolicies,addPolicy,deletePolicy,updatePolicy,getProvider}