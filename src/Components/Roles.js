
import { Button } from "./Button";

const Roles=(props)=>{

    return (
        <>
            <h1>Continue as </h1>
                {props.roles.map(role=>{
                    return <Button url={role.toLowerCase()}>{role}</Button>
                })}
          
          
        </>
    )
}

export default Roles;