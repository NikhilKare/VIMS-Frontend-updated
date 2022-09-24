
import { FunctionsSharp } from "@mui/icons-material";
import { useEffect, useReducer, useState } from "react";
import { useHistory } from "react-router-dom";
import ProviderService from "../../Services/ProviderService";
import UserService from "../../Services/UserService";
import Customer from "./Customer/Customer";
import Policy from "./Policy"
import './policylist.css'

function PolicyList(props){
 //const [any, forceUpdate] = useReducer(num => num + 1, 0);
      const[noOfPage,setNoOfPage]=useState([]);
      // const str="";
   useEffect(()=>{
      UserService.getNoOfPolicies().then(res=>{
                  console.log(res.data.data)
                  const arr=[];
                  for(var i=1;i<=Math.ceil(parseInt(res.data.data)/2);i++){
                        arr.push(i)
                  }
                     setNoOfPage(arr)  
                  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1")
      }).catch(err=>console.log(err))
   },[])
    
   console.log(noOfPage)
      
   
      return (
      <>
 <div class="container15"
      style={{width:"130%",
      fontSize:"10px",
      marginLeft:"-250px",
      marginRight:"40px",
      padding:"8%"
      }}
 >
                  {
            props.policies.length!==0?
                  props.policies.map(policy=>
                  <Policy policy={policy} delete={props.delete}/>):
                  "No Policies available"}
          </div>
        {noOfPage.map(i=><button value={i} onClick={props.getPage}>&nbsp;    {i}  &nbsp;    </button>)}

</> 
      );
}
export default PolicyList;