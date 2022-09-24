import { useEffect, useState } from 'react';
import userService from '../../../Services/UserService';
import PolicyList from "./../PolicyList"
import './allpolicylist.css'
function AllPolicyList() {
  const [policies, setPolicies] = useState([]);
  const [pageNo,setPageNo]=useState(1);


const getPage=(e)=>{
  console.log(e.target.value);
  userService.getAll(e.target.value).then(res=>{
    console.log(res.data)
    setPolicies(res.data)
  })
  .catch(err=>console.log(err))
}


  useEffect(() => {
    userService.getAll(1)
      .then(response => {
        console.log('Printing policy data', response.data);
        setPolicies(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }, []);
  return (
    <>

      <div class="container my-5">
        <div class="text-center mb-5">
          <span class="text-secondary text-uppercase">Pricing</span>
          <h1 class="text-capitalize font-weight-bold">All <span class="headline">Policies</span></h1>
          <PolicyList policies={policies} getPage={getPage}/>
        </div>
      </div>
    </>
  );
}
export default AllPolicyList;