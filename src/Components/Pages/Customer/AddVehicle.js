
import React, { useState} from 'react'
import "./../../Register.css"
import axios from 'axios'
// import useAuth from '../hooks/useAuth';
import { useHistory } from 'react-router-dom'
import * as Components from './../Component';
import log from './../../img/log.svg'
import reg from './../../img/register.svg'
import emailjs from '@emailjs/browser';

import CustomerService from "../../../Services/CustomerService";
const LOGIN_URL = 'http://localhost:8080/api/login';
    

        
       
    


const AddVehicle = () => {

    const history = useHistory();
    const [vehicle, setVehicle] = useState({
        chasisNo: "",
        vehicleType: "",
        registrationDate: "",
        vehicleNumber: ""
    })

    const addVehcleDetails=(e)=>{
        e.preventDefault();
        CustomerService.addVehicle(vehicle).then(res=>{
            console.log(res)
            history.push(`/customer`,res.data.data)
        }
        )
    }

    //SENDING AXIOS REQUEST
   
    //register
    
    const handlechange = event => {
        const { name, value } = event.target
        setVehicle({
            ...vehicle, [name]: value
        })
    }
    

    return (
      
       
            <Components.div>
                
                    <Components.Form>
                        <Components.Title>Add Vehicle </Components.Title>
                        <Components.Input type='text' name="chasisNo" value={vehicle.chasisNo} placeholder='Enter Chasis No' onChange={handlechange} />
                        <Components.Input type='text' name="vehicleNumber" value={vehicle.vehicleNumber} placeholder='Enter vehicle Number' onChange={handlechange} />
                        <Components.Input type='date' name="registrationDate" value={vehicle.registrationDate}  onChange={handlechange} />
                        <Components.Input type='text' name="vehicleType" value={vehicle.vehicleType} placeholder='Enter vehicleType' onChange={handlechange} />
                        <br/>
                        <Components.Button onClick={addVehcleDetails}>Add Vehicle</Components.Button><br/>
                        <Components.Cancel  onClick={()=>history.push("/customer")}>Cancel</Components.Cancel>
                        <br />
             
                        <img src={reg} alt="signin" width='500px' height='250px' />
                    </Components.Form>
          
            </Components.div>
           
    )
}

export default AddVehicle;
