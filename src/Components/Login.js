import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Login = ({setLoginUser}) => {

    const history = useHistory()
    //FOR INITIALIZING DATA TO NULL AT BEGINING
    const [ user, setUser] = useState({
        email:"",
        password:""
    })
    //FOR WHEN WE TYPE SOMETHING IN INPUT BOX
    const handleChange = event => {
        const { name, value } = event.target
        setUser({
            ...user,
            [name]: value
        })
    }
    
    //SENDING AXIOS REQUEST
    const login = () => {
        axios.post("http://localhost:8080/api/home/login", user)
        .then(res => {

            alert(res.data.firstName)
            //setLoginUser(res.data.user)
            alert(res.data.roles)
            console.log(res.data)
            if(res.data.roles.length===1)
                {
                    history.push("/"+res.data.roles[0].roleName)
                    alert(res.data.roles[0])
                }
        })
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/sign-up")}>Register</div>
        </div>
    )
}

export default Login