import { padding } from '@mui/system';
import { useEffect, useState } from 'react';
import {  useSelector } from 'react-redux';
import { Link, NavLink, useHistory } from 'react-router-dom';
import Authorization from '../../Authorization';

import './policy.css'


const Policy = (props) => {
 
  const state=useSelector(state=>state);
// useEffect(()=>{

// },arr)
    console.log(props)
    const p = props.policy;
    const history=useHistory();

    const buyPolicy=(e)=>{
      e.preventDefault();
        //console.log(e.target.value)
        //console.log(state.policy)
        console.log(sessionStorage.getItem("chasisNo"))
        sessionStorage.setItem("policyId",e.target.value);
        if(sessionStorage.getItem("chasisNo")==null){
          
          alert("choose Vehicle")
          history.push("/profile")
        }
          else
          {
            // CustomerService.subscribePolicy(sessionStorage.getItem("chasisNo"),e.target.value).then(res=>{
            //   console.log(res.data)
            //   sessionStorage.removeItem("policyId");
            //     sessionStorage.removeItem("chasisNo");
            //   alert(res.data.data);
            //   history.push("/");
            // }).catch(err=>console.log(err))
            sessionStorage.setItem("policy",JSON.stringify(props.policy))
                history.push("/payment")
          }
    }

    const deletePolicy=(e)=>{
      e.preventDefault();
      props.delete(e.target.value)
    }
    const updatePolicy=(e)=>{
      e.preventDefault();
      sessionStorage.setItem("policyId",e.target.value);
      history.push("/updatepolicy")
    }
    return (
        <>
<div >
    <div class="my-5 py-4 px-5 bg-light d-sm-flex align-items-center justify-content-between">
      <div class="text-center">
      <small class="d-block heading">starting From</small>
        <h2 class="my-2 font-weight-bold">${p.policyPremium}</h2>
        <small class="text-uppercase text-secondary"></small>
      </div>
      <div class="text-center text-uppercase text-secondary">
        <small class="d-block heading">Name</small>
        <small class="d-block my-3">{p.policyName}</small>
        
      </div>
      <div class="text-center text-uppercase text-secondary">
        <small class="d-block heading">Type</small>
        <small class="d-block my-3">{p.policyType}</small>
      </div>

      <div class="text-center text-uppercase text-secondary">
        <small class="d-block heading">policyLaunchDate</small>
        <small class="d-block my-3">{p.policyLaunchDate}</small>
      </div>
      <div class="text-center text-uppercase text-secondary">
        <small class="d-block heading">Duration</small>
        <small class="d-block my-3">{p.duration} YEARS</small>
      </div>
      {
        props.isView?
      <div class="text-center">
        <NavLink to="/profile" class="btn text-white px-5 py-3 main-btn">Back</NavLink>
      </div>
      :
      <div class="text-center">
        {
         Authorization.IsCustomer()?<button onClick={buyPolicy} value={p.policyId} class="btn text-white px-5 py-3 main-btn"
       
         >BUY</button>:"" 
        }
        
        <br/>
        &nbsp;&nbsp;
        {
           props.delete?<button onClick={deletePolicy} value={p.policyId} class="btn text-white px-5 py-3 main-btn"
           style={{
            margin:"2%",
            marginRight:"20px"
          }}
           >Delete</button>:""
        }
        <br/>
        &nbsp;&nbsp;
        {
          props.delete?<button onClick={updatePolicy} value={p.policyId} class="btn text-white px-5 py-3 main-btn"
    
          >Update</button>:""
        }
        
      </div>
      }

   
   
  </div>
  </div>

 



        </>




        // <div className="main-container">
        //     <h2>Vehicles List</h2>
        //     <hr />
        //     <div>
        //         <div className="container">
        //             {
        //                 <div className="row d-flex justify-content-center align-items-center h-100">
        //                     <div className="col">
        //                         <div className="card mb-4">
        //                             <div className="card-body p-4">
        //                                 <div className="row align-items-center">
        //                                     <div className="col-md-2">
        //                                         {/* <img src=""
        //                         className="img-fluid" alt="Generic placeholder image"/> */}
        //                                     </div>

        //                                     <div className="col-md-2 d-flex justify-content-center">
        //                                         <div>
        //                                             <p className="small text-muted mb-4 pb-2">Chasis No</p>
        //                                             <p className="lead fw-normal mb-0">{v.chasisNo}</p>
        //                                         </div>
        //                                     </div>
        //                                     <div className="col-md-2 d-flex justify-content-center">
        //                                         <div>
        //                                             <p className="small text-muted mb-4 pb-2">Type</p>
        //                                             <p className="lead fw-normal mb-0">{v.vehicleType}</p>
        //                                         </div>
        //                                     </div>
        //                                     <div className="col-md-2 d-flex justify-content-center">
        //                                         <div>
        //                                             <p className="small text-muted mb-4 pb-2">Subscription Date</p>
        //                                             <p className="lead fw-normal mb-0">{v.subscriptionDate}</p>
        //                                         </div>
        //                                     </div>
        //                                     <div className="col-md-2 d-flex justify-content-center">
        //                                         <div>
        //                                             <p className="small text-muted mb-4 pb-2">Expiry Date</p>
        //                                             <p className="lead fw-normal mb-0">{v.expiryDate}</p>
        //                                         </div>
        //                                     </div>
        //                                     <div className="col-md-2 d-flex justify-content-center">
        //                                         <div>
        //                                             <p className="small text-muted mb-4 pb-2">Vehicle Number</p>
        //                                             <p className="lead fw-normal mb-0">{v.vehicleNumber}</p>
        //                                         </div>
        //                                     </div>
        //                                     <div className="col-md-2 d-flex justify-content-center">
        //                                         <div>
        //                                             <p className="small text-muted mb-4 pb-2"></p>
        //                                             <p className="lead fw-normal mb-0">{v.policy}</p>
        //                                             <button className='btn'>Buy</button>
        //                                         </div>
        //                                     {/* </div>
        //                                     <div className="col-md-2 d-flex justify-content-center"> */}
        //                                         <div>
        //                                             <p className="small text-muted mb-4 pb-2"></p>
        //                                             <p className="lead fw-normal mb-0">{v.policy}</p>
        //                                             <button className='btn'>Delete</button>
        //                                         </div>
        //                                     </div>

        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             }</div>
        //     </div>
        // </div>


    )


}
export default Policy;