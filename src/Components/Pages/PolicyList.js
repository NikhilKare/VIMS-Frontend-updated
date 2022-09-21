
import { useEffect, useReducer, useState } from "react";
import { useHistory } from "react-router-dom";
import ProviderService from "../../Services/ProviderService";
import Customer from "./Customer/Customer";
import Policy from "./Policy"
import './policylist.css'

function PolicyList(props){
 //const [any, forceUpdate] = useReducer(num => num + 1, 0);

   


     
      return (
      <>
 <div class="container15">
                  {
            props.policies.length!==0?
                  props.policies.map(policy=>
                  <Policy policy={policy} delete={props.delete}/>):
                  "No Policies available"}
          </div>

</> 
      );
}
export default PolicyList;