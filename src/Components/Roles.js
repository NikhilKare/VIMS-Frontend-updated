
import { Button } from "./Button";
import CardItem from './CardItem';
import './Cards.css';
const Roles=(props)=>{

    return (
        <>
            <h1>Continue as </h1>
            
                {
                props.roles.map(role=>{
                
                    return <Button url={role.toLowerCase()}>{role}</Button>
                })
                }
          
          
        </>
    )
}

export default Roles;