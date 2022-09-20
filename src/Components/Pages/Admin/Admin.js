
import React, { useEffect, useState } from 'react'
import AdminService from '../../../Services/AdminService'
import Provider from './Provider';

function Admin() {
    const [providers,setProviders]=useState([]);
    useEffect(()=>{
        AdminService.getAllProviders()
        .then(res=>{
            console.log(res.data)
            setProviders(res.data.data)

        })
        .catch(err=>{console.log(err)})
    },[])
  return (
    <>
        {
            providers.map(p=>{
               return(
               
                <Provider provider={p}/>
                
            )
            }
                    
                    
                )
                
            
        }
    </>
  )
}

export default Admin