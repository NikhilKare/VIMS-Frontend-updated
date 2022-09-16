import axios from "axios";
import { useState } from "react"
import { NavLink } from "react-router-dom";
import CustomerService from "../../Services/CustomerService";
const AddVehicle=()=>{
    
    const[chasisNo,setChasisNo]=useState('12355');
    const[vehicleType,setVehicleType]=useState('SUV');
    const[registrationDate,setRegistrationDate]=useState('2022-08-15');
    const[vehicleNumber,setVehicleNumber]=useState('MH-15-CF-1236');

    const addVehcleDetails=()=>{
        const vehicle={chasisNo,vehicleType,registrationDate,vehicleNumber};
        CustomerService.addVehicle(vehicle);
        
        
    }
    return(
        <button onClick={addVehcleDetails}>AddVehicle</button> 
       
    )
    
}
export default AddVehicle;