import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import Authorization from "./../../../Authorization"
import reg from './../../img/register.svg'
import * as Components from './../Component';

const EditUser=()=>{
    let history = useHistory(); 
    const[user,setuser]=useState({
        firstName:"",
        lastName:"",
        userName:"",
        address:"",
        contactNumber:"",
        email:"",
    })
    const {firstName,lastName,userName,address,contactNumber,email}=user;
    const onInputChange=e=>{
        setuser({
            ...user,[e.target.name]:e.target.value
        });
    }
    useEffect(() => {
        loadUser();
      }, []);
      const saveUser= async e=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/api/users`,user)
        .then(res=>{
            alert("User Data Updated Successfuly")
            sessionStorage.setItem('user',JSON.stringify(user));
            history.push("/profile")
        })
        .catch(err=>{
            alert ("Something went Wrong")
        })
      }
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/api/users/${Authorization.getUser().userId}`);
        setuser(result.data.data);
        console.log(result.data.data)
      };
      return (
        <Components.div>               
                    <Components.Form>
                        <Components.Title>Edit Profile</Components.Title>
                        <Components.Input type='text' name="firstName" value={firstName} placeholder='Enter First Name' onChange={onInputChange} />
                        <Components.Input type='text' name="lastName" value={lastName} placeholder='Enter Last Name' onChange={onInputChange} />
                        <Components.Input type='text' name="userName" value={userName} placeholder='Enter User Name' onChange={onInputChange} />
                        <Components.Input type='text' name="address" value={address} placeholder='Enter Address' onChange={onInputChange} />
                        <Components.Input type='number' name="contactNumber" value={contactNumber} placeholder='Enter contact Number' onChange={onInputChange} />
                        <Components.Input type='text' name="email" value={email} placeholder='Enter Email Address' onChange={onInputChange} />
                        
                        <br/>
                        <Components.Button onClick={saveUser}>Confirm</Components.Button><br/>
                        <Components.Cancel  onClick={()=>history.push("/profile")}>Cancel</Components.Cancel>
                        <br />
                        <img src={reg} alt="signin" width='500px' height='250px' />
                    </Components.Form>          
            </Components.div> 
      )
}
export default EditUser;