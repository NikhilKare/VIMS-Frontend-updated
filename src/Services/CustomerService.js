
import Authorization from '../Authorization';
import httpClient from './http-common';

// const jwt=sessionStorage.getItem("jwt");

const getPolicyById=(id)=>{
    const  user=JSON.parse(sessionStorage.getItem("user"));
return httpClient.get(`/customers/${user.userId}/policy/${id}`);
}


const getLicenseNo=()=>{
    const  user=JSON.parse(sessionStorage.getItem("user"));
return httpClient.get(`/customers/${user.userId}`);
}

const getAllVechiles=()=>{
    
                  const  user=JSON.parse(sessionStorage.getItem("user"));
    return httpClient.get(`/customers/${user.userId}/vehicles`)
}
const addVehicle=(vehicle)=>{
    const user=JSON.parse(sessionStorage.getItem("user"));
    return httpClient.post(`/customers/${user.userId}/vehicles`,vehicle)
}
const subscribePolicy=(vid,policyId)=>{
    const user=JSON.parse(sessionStorage.getItem("user"));
    return httpClient.get(`/customers/${user.userId}/vehicles/${vid}/addPolicy?policyId=${policyId}`)
}
const deleteVechile=(vid)=>{
    const user=Authorization.getUser();
    return httpClient.delete(`/customers/${user.userId}/vehicles/${vid}`)
}

export default {getAllVechiles,addVehicle,getLicenseNo,subscribePolicy,deleteVechile,getPolicyById};
  