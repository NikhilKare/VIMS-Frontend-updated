import axios from "axios";
import { useEffect, useState } from "react";
import {useHistory} from 'react-router-dom';
import AllVehicle from "./AllVehicle";
import CustomerService from "../../Services/CustomerService";

function Customer(){
    const history=useHistory();
        const[vehicles]=useState([]);
        const init = () => {
            
            //CustomerService.getAllVechiles();
            //CustomerService.DeleteVechile(12355)
                console.log('Printing Vechiles data');
              CustomerService.subscribePolicy({
                vehicleId:"12355",
                policyId:1
              })  
              
               
              
          }
        
          useEffect(() => {
            {init()}
          }, []);
  
       
    return(
        <>
        <h1>Welcome to Customer Page</h1>
        
        <button onClick={()=>history.push("/vehicle")}>AddVehicle</button>
        {/* <button onClick={}>AddVehicle</button> */}
        {/* {
            vehicles.map(v=>(
                console.log(v)
            ))
            
        } */}
        </>
    )

}
export default Customer;