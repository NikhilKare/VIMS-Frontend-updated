import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import vimsService from '../../Services/VIMSService';

import './policylist.css'
function PolicyList(){
    const [policies,setPolicies]=useState([]);
    const init = () => {
        vimsService.getAll()
          .then(response => {
            console.log('Printing policy data', response.data);
            setPolicies(response.data);
          })
          .catch(error => {
            console.log('Something went wrong', error);
          }) 
      }
    
      useEffect(() => {
        init();
      }, []);
      return (
        <>
        
        <div className="main-container">
          <h1>List of policies</h1>
          <hr/>
          <div>
                <div className="container">
                  {
                  policies.map(policy=>(
                  <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                      <div className="card mb-4">
                        <div className="card-body p-4">
                          <div className="row align-items-center">
                            <div className="col-md-2">
                              {/* <img src=""
                                className="img-fluid" alt="Generic placeholder image"/> */}
                            </div>
                           
                              <div className="col-md-2 d-flex justify-content-center">
                                <div>
                                  <p className="small text-muted mb-4 pb-2">Policy Name</p>
                                  <p className="lead fw-normal mb-0">{policy.policyName}</p>
                                </div>
                              </div>
                              <div className="col-md-2 d-flex justify-content-center">
                                <div>
                                  <p className="small text-muted mb-4 pb-2">Type</p>
                                  <p className="lead fw-normal mb-0">{policy.policyType}</p>
                                </div>
                              </div>
                              <div className="col-md-2 d-flex justify-content-center">
                                <div>
                                  <p className="small text-muted mb-4 pb-2">Launched Date</p>
                                  <p className="lead fw-normal mb-0">{policy.policyLaunchDate}</p>
                                </div>
                              </div>
                              <div className="col-md-2 d-flex justify-content-center">
                                <div>
                                  <p className="small text-muted mb-4 pb-2">Premium</p>
                                  <p className="lead fw-normal mb-0">{policy.policyPremium}</p>
                                </div>
                            </div>
                            <div className="col-md-2 d-flex justify-content-center">
                                <div>
                                  <p className="small text-muted mb-4 pb-2">Duration</p>
                                  <p className="lead fw-normal mb-0">{policy.duration}</p>
                                  <button className='btn'>Buy</button>
                                </div>
                              </div>
                             
                          </div>  
                        </div> 
                      </div>    
                    </div>
                  </div>   
                  ))
                } 
                </div>
              
          </div>
        </div>
        </>
      );
}
export default PolicyList;