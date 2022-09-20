import './addrole.css'

import { useHistory } from 'react-router-dom'
import UserService from '../../../Services/UserService';
import React, { useEffect, useState} from 'react'
import * as Components from './../User/RoleComponent';


function AddRole(){
    const history = useHistory();

    const[checked,setChecked]=useState(true)
    const[checked1,setChecked1]=useState(false)

    const [role, setRole] = useState({
        companyName:"",
        licenceNo:"",
        roles:""
    })

    const handlechange = e => {
        console.log(e.target.value)
        setRole({
            ...role, [e.target.name]: e.target.value
        })
    }
    useEffect(()=>{
        if(checked)
            setRole({
                ...role,roles:"CUSTOMER",
            })
        if(checked1)
            setRole({
                ...role,roles:"POLICY_PROVIDER",
            })    
    },[checked,checked1])

    const addRole=(e)=>{
        e.preventDefault();
        console.log(role)
        UserService.addRole(role)
        .then(res=>{
            const user=JSON.parse(sessionStorage.getItem("user"))
            user.roles.push(role.roles);
            console.log(user);
            sessionStorage.setItem("user",JSON.stringify(user));
            history.push(`/profile`,res.data.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return(
        <>
        <Components.div>
        <div className='container'>
        <h1>Add Role Page</h1>    
            <Components.Form>           
            <Components.Input type='radio' name="roleName" value={"CUSTOMER"} onChange={()=>setChecked(!checked)} checked={checked}/>Customer
            {
                checked?(
                    <Components.Input type='text' name="licenceNo" value={role.licenceNo} placeholder='Enter licence No' onChange={handlechange} />
                ):<></>
            }
            <br/><Components.Input type='radio' name="roleName" value={role.roles} onChange={()=>setChecked1(!checked1)} checked={checked1} />Policy Provider 
            {
                checked1?(
                    <Components.Input type='text' name="companyName" value={role.companyName} placeholder='Enter Company Name' onChange={handlechange} />
                ):<></>
            }
            <Components.Button onClick={addRole}>Add Role</Components.Button>
            </Components.Form>
        </div> 
        </Components.div>
        </>
    )
}
export default AddRole;