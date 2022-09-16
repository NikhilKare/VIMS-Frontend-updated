
import httpClient from './http-common';

// const jwt=sessionStorage.getItem("jwt");

const user=JSON.parse(sessionStorage.getItem("user"));


const getAllVechiles=()=>{
    return httpClient.get(`/customers/${user.userId}`)
}
const addVehicle=(vehicle)=>{
    return httpClient.post(`/customers/${user.userId}`,vehicle)
}
const subscribePolicy=(data)=>{
    return httpClient.get(`/customers/${user.userId}/addPolicy?vehicleId=${data.vehicleId}&policyId=${data.policyId}`)
}
const DeleteVechile=(vid)=>{
    return httpClient.delete(`/customers/${user.userId}/vehicles/${vid}`)
}

export default {getAllVechiles,addVehicle,subscribePolicy,DeleteVechile};
  