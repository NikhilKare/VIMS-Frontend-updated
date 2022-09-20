import { useEffect, useState } from 'react';
import userService from '../../../Services/UserService';
import PolicyList from "./../PolicyList"
import './allpolicylist.css'
function AllPolicyList(){
    const [policies,setPolicies]=useState([]);
    
        
    
    
      useEffect(() => {
        userService.getAll()
          .then(response => {
            console.log('Printing policy data', response.data);
            setPolicies(response.data);
          })
          .catch(error => {
            console.log('Something went wrong', error);
          }) 
      }, []);
      return (
      <>
      
 <div class="container my-5">
    <div class="text-center mb-5">
      <span class="text-secondary text-uppercase">Pricing</span>
      <h1 class="text-capitalize font-weight-bold">All <span class="headline">Policies</span></h1>
                  <PolicyList policies={policies}/>
</div>
</div>
</> 
      );
}
export default AllPolicyList;