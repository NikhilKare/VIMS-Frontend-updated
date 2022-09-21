
import React, { useEffect, useState } from 'react'
import AdminService from '../../../Services/AdminService'
import Provider from './Provider';

function Admin() {
    const [providers, setProviders] = useState([]);
    const [providers1, setProviders1] = useState([]);
    
    useEffect(() => {
        AdminService.getAllProviders()
            .then(res => {
                console.log(res.data)
                setProviders(res.data.data)
                setProviders1(res.data.data)
            })
            .catch(err => { console.log(err) })
    }, [])
    const nameFilter=(e)=>{
        setProviders1(providers.filter((p) => {
            if (p.user.firstName.toLowerCase().includes(e.target.value.toLowerCase())) {
                return p
            }}))
    }
    return (
        <>
            <input
                type="text"
                placeholder="Search"
                onChange={nameFilter}
            />
            {
                providers1.map(p => {
                    return (
                        <Provider provider={p} />
                    )
                }
                )
            }
        </>
    )
}

export default Admin