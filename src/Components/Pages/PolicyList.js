import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import vimsService from '../../Services/VIMSService';
import Policy from "./Policy"
import './policylist.css'
function PolicyList(){
    const [policies,setPolicies]=useState([]);
    const init = () => {
        vimsService.getAll()
          .then(response => {
            console.log('Printing policy data', response.data);
            setPolicies(response.data);
          })
          .catch(error => {
            console.log('Something went wrong', error);
          }) 
      }
    
      useEffect(() => {
        init();
      }, []);
      return (
      <>
 <div class="container my-5">
    <div class="text-center mb-5">
      <span class="text-secondary text-uppercase">Pricing</span>
      <h1 class="text-capitalize font-weight-bold">All <span class="headline">Policies</span></h1>
    </div>
  
                  {
                  policies.map(policy=>
                  <Policy policy={policy}/>)}
          </div>

</> 
      );
}
export default PolicyList;