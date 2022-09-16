import './policy.css'

const Vehicle = (props) => {
    const p = props.policy;
    console.log(p);
    return (
        <>

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

      <div class="text-center">
        <a href="#" class="btn text-white px-5 py-3 main-btn">BUY</a>
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
export default Vehicle;