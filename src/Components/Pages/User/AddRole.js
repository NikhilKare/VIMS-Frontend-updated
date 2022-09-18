import './addrole.css'

import { useHistory } from 'react-router-dom'
import UserService from '../../../Services/UserService';
import React, { useState} from 'react'
import * as Components from './../User/RoleComponent';


function AddRole(){
    const history = useHistory();

    const[checked,setChecked]=useState(false)
    const[checked1,setChecked1]=useState(false)

    const {role, setRole} = useState({
        companyName:"",
        licenceNo:"",
        roles:""
    })

    const{companyName,licenceNo,roles}=role

    const handlechange = e => {
        setRole({
            ...role, [e.target.name]: e.target.value
        })
    }

    const addRole=(e)=>{
        e.preventDefault();
        UserService.addRole(role)
        .then(res=>{
            console.log(res)
            history.push(`/roles`,res.data.data)
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
            <Components.Input type='checkbox' name="roleName" value={roles} onChange={()=>setChecked(!checked)} checked={checked} />Customer
            {
                checked?(
                    <Components.Input type='text' name="licenceNo" value={licenceNo} placeholder='Enter licence No' onChange={handlechange} />
                ):<></>
            }
            <br/><Components.Input type='checkbox' name="roleName" value={roles} onChange={()=>setChecked1(!checked1)} checked={checked1} />Policy Provider 
            {
                checked1?(
                    <Components.Input type='text' name="companyName" value={companyName} placeholder='Enter Company Name' onChange={handlechange} />
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