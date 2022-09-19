import Authorization from "../Authorization";
import httpClient from "./http-common";

const getAllProviderPolicies=()=>{
   return httpClient.get(`/provider/${Authorization.getUser().userId}/policies`)
}

const addPolicy=(policy)=>{
   return httpClient.post(`/provider/${Authorization.getUser().userId}`,policy)
}

export default {getAllProviderPolicies,addPolicy}