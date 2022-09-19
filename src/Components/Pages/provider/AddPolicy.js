
import React, { useState} from 'react'
import "./../../Register.css"
import axios from 'axios'
// import useAuth from '../hooks/useAuth';
import { useHistory } from 'react-router-dom'
import * as Components from '../Component';
import log from './../../img/log.svg'
import reg from './../../img/register.svg'
import emailjs from '@emailjs/browser';

import CustomerService from "../../../Services/CustomerService";
import ProviderService from '../../../Services/ProviderService';
const LOGIN_URL = 'http://localhost:8080/api/login';
    

const AddPolicy = () => {

    const history = useHistory();
    
    const [policy, setPolicy] = useState({
        policyName:"",
        policyPremium:"",
        policyType:"",
        policyLaunchDate:"",
        duration:""
    })
    const {policyName, policyPremium,policyType, policyLaunchDate, duration}=policy

    const handlechange = e => {
        setPolicy({
            ...policy, [e.target.name]: e.target.value
        })
    }
    
    const addPolicyDetails=(e)=>{
        e.preventDefault();
        ProviderService.addPolicy(policy).then(res=>{
            console.log(res)
            history.push(`/profile`,res.data.data)
        }
        ).catch(err=>console.log(err))
    }

    return (
            <Components.div>               
                    <Components.Form>
                        <Components.Title>Add Policy </Components.Title>
                        {/* <Components.Input hidden type='text' name="policyId" value={policyId} placeholder='' onChange={handlechange} /> */}
                        <Components.Input type='text' name="policyName" value={policyName} placeholder='Enter policy Name' onChange={handlechange} />
                        <Components.Input type='number' name="policyPremium" value={policyPremium} placeholder="Enter policy Pemium" onChange={handlechange} />
                        <Components.Input type='text' name="policyType" value={policyType} placeholder='Enter policy Type' onChange={handlechange} />
                        <Components.Input type='date' name="policyLaunchDate" value={policyLaunchDate}  onChange={handlechange} />
                        <Components.Input type='number' name="duration" value={duration} placeholder='Enter vehicleType' onChange={handlechange} />
                        <br/>
                        <Components.Button onClick={addPolicyDetails}>Add Policy</Components.Button><br/>
                        <Components.Cancel  onClick={()=>history.push("/profile")}>Cancel</Components.Cancel>
                        <br />
                        <img src={reg} alt="signin" width='500px' height='250px' />
                    </Components.Form>          
            </Components.div>         
    )
}

export default AddPolicy;
