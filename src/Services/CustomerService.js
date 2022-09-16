
import httpClient from './http-common';

// const jwt=sessionStorage.getItem("jwt");
const id=sessionStorage.getItem("userId")

const getAllVechiles=()=>{
    return httpClient.get(`/customers/${id}`)
}
const addVehicle=(vehicle)=>{
    return httpClient.post(`/customers/${id}`,vehicle)
}
const subscribePolicy=(data)=>{
    return httpClient.get(`/customers/${id}/addPolicy?vehicleId=${data.vehicleId}&policyId=${data.policyId}`)
}
const DeleteVechile=(vid)=>{
    return httpClient.delete(`/customers/${id}/vehicles/${vid}`)
}

export default {getAllVechiles,addVehicle,subscribePolicy,DeleteVechile};
  