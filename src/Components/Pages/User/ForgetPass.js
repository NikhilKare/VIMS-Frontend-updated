import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import * as Components from '../../Pages/Component';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ForgetPass = (props) => {
    const history = useHistory();
    const[boolean,setBoolean]=useState(true);
    const [user1, setUser1] = useState({
        email: "",
        otp: ""
    }, [])
    const handleLogin = event => {
        const { name, value } = event.target
        setUser1({
            ...user1,
            [name]: value
        })
    }
    const setOTP=(e)=>{
        
        e.preventDefault();
        axios.get("http://localhost:8080/api/forgetpass?email="+user1.email)
            .then(res => {
                console.log(res)
                setBoolean(false);
                alert("OTP send Successfully...")
                
            }).catch(err => { 
                console.log(err) 
            })

    }
    const submitOTP=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8080/api/forgetpass",user1)
            .then(res => {
                console.log(res)
                setBoolean(false);
                alert("OTP Validated...please check your Email")
                props.setForget(false);
                
            }).catch(err => { 
                console.log(err) 
                alert("Wrong OTP")
            })
    }
    return (
        <div>
            <Components.Form>
                <Components.Title>Forget Password</Components.Title>

                {boolean?<Components.Input   type='email' name="email" value={user1.email} onChange={handleLogin} placeholder="Enter your Email" />
                :<Components.Input readOnly   type='email' name="email" value={user1.email} onChange={handleLogin} placeholder="Enter your Email" />                
                }
                
                {boolean?"":<Components.Input type='text'  name="otp" value={user1.otp} onChange={handleLogin} placeholder="Enter OTP" />}
                {
                    boolean?
                    <><Components.Button onClick={setOTP}>Generate OTP</Components.Button><br /></>:
                    
                    <><Components.Button onClick={submitOTP}>Submit</Components.Button><br /></>
                }
                
                {/* <img src={} alt="register" width='500px' /> */}
            </Components.Form>
        </div>
    )
}
export default ForgetPass;




