import httpClient from './http-common';

const addRole=(role)=>{
  const user=JSON.parse(sessionStorage.getItem("user"));
  return httpClient.post(`/users/${user.userId}/role`,role)
}
const getAll = () => {
    return httpClient.get('/policies');
  };

  
  export default {getAll,addRole};