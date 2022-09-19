import Authorization from "../Authorization";
import httpClient from "./http-common";

const getAllProviderPolicies=()=>{
   return httpClient.get(`/provider/${Authorization.getUser().userId}/policies`)
}

export default {getAllProviderPolicies}