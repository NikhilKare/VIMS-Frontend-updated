import { useEffect, useState } from 'react';

import ProviderService from '../../../Services/ProviderService';

import PolicyList from "./../PolicyList"
import './allpolicylist.css'
function Policies(){
    const [policies,setPolicies]=useState([]);
    
    
      useEffect(() => {
        console.log("in use")
        ProviderService.getAllProviderPolicies()
          .then(response => {
            
            console.log('Printing policy data', response.data);
            setPolicies(response.data.data);
          })
          .catch(error => {
            console.log('Something went wrong', error);
          }) 
      },[]);
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
export default Policies;