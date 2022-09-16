import { Link } from "react-router-dom";
import { Button } from "./Button";

const Roles=()=>{

    return (
        <>
            <h1>Continue as </h1>

            <Button url="/admin">Admin</Button>
            <Button url="/customer">Customer</Button>
          
          
        </>
    )
}

export default Roles;