
import Policy from "./Policy"
import './policylist.css'
function PolicyList(props){
      return (
      <>
 <div class="container my-5">
                  {
                  props.policies.map(policy=>
                  <Policy policy={policy}/>)}
          </div>

</> 
      );
}
export default PolicyList;