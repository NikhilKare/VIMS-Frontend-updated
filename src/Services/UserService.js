import httpClient from './http-common';

const addRole=(role)=>{
  const user=JSON.parse(sessionStorage.getItem("user"));
  return httpClient.post(`/users/${user.userId}/role`,role)
}
const getAll = () => {
    return httpClient.get('/policies');
  };
  const updateProfile=()=>{
    const user=JSON.parse(sessionStorage.getItem("user"));
    return httpClient.put(`/users/${user.userId}`)
  }

  
  export default {getAll,addRole,updateProfile};