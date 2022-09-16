
import { useEffect, useState } from "react";
import CustomerService from "../../Services/CustomerService";
import { Button } from "../Button";


function Customer(){
        const[vehicles,setVehicles]=useState([]);
     const getAllVechiles = () => {
            
            CustomerService.getAllVechiles().then(
                res=>{
                    setVehicles(res.data.data);
                }
            ).catch(err=>
                console.log(err.msg)

            )
           
              
               
              
          }
        
          useEffect(() => {
           getAllVechiles();
          }, []);
  
       
    return(
        <>
        <h1>Welcome to Customer Page</h1>
        
        <Button url="/vehicle">AddVehicle</Button>
        {
            // vehicles.map(v=>)
        }
        </>
    )

}
export default Customer;