
import Policy from "./Policy"
import './policylist.css'
function PolicyList(props){
      
      return (
      <>
 <div class="container my-5">
                  {
            props.policies.length!==0?
                  props.policies.map(policy=>
                  <Policy policy={policy}/>):
                  "No Policies available"}
          </div>

</> 
      );
}
export default PolicyList;