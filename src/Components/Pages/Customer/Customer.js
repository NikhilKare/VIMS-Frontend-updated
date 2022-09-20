
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import CustomerService from "../../../Services/CustomerService";
import ProviderService from "../../../Services/ProviderService";
import RegisterLogin from "../../RegisterLogin";
import PolicyList from "../PolicyList";
import Authorization from "./../../../Authorization"
import "./customer.css";
function Customer(props) {
    const history = useHistory();
    const [vehicles, setVehicles] = useState([]);
    const [LicenseNo, setLicenseNo] = useState('');
 
    const [policies,setPolicies]=useState([]);
    
    

    const deleteHandler=(id)=>{
           
        ProviderService.deletePolicy(id).then(res=>{
            alert(res.data.data);
            setPolicies(policies.filter(p=>p.policyId!=id))
              
        }).catch(err=>console.log(err))
      }   
    useEffect(() => {
      console.log("in use")
      ProviderService.getAllProviderPolicies()
        .then(response => {
          
          console.log('Printing policy data', response.data);
          setPolicies(response.data.data);
        })
        .catch(error => {
          console.log('Something went wrong', error);
        }) 
    },[]);
    const getLicenseNo = () => {
        CustomerService.getLicenseNo()
            .then(res => {
                console.log(res);
                setLicenseNo(res.data);
            })
            .catch(err =>
                console.log(err));
    }
        const state=useSelector((state)=>state);
    const getAllVechiles = () => {
        CustomerService.getAllVechiles().then(
            res => {
                console.log(res.data.data)
                setVehicles(res.data.data);
            }
        ).catch(err =>
            console.log(err.msg)

        )
    }
    useEffect(() => {
        if ( state.loggedin.IsLoggedIn && Authorization.IsCustomer()) {
            getLicenseNo();
        }  
    }, vehicles,policies);
    useEffect(()=>{
        if ( state.loggedin.IsLoggedIn && Authorization.IsCustomer())
        getAllVechiles();
    },policies)

    const addPolicy=async (e)=>{
        e.preventDefault();
        console.log(e.target.value);
        setVehicles(vehicles);
        
        console.log(state.policy)
        if(sessionStorage.getItem("policyId")==null){
          sessionStorage.setItem("chasisNo",e.target.value);
          history.push("/policies")
        }
        else{
            CustomerService.subscribePolicy(e.target.value,sessionStorage.getItem("policyId")).then((res)=>{
                sessionStorage.removeItem("policyId");
                sessionStorage.removeItem("chasisNo");
                alert(res.data.data);
                history.push("/")
            }

            ).catch(err=>console.log(err))
            
        }
        

    }

    const showPolicy = (e) => {
        e.preventDefault();
        const policyId = e.target.value;
        CustomerService.getPolicyById(policyId)

            .then(res => {
                console.log(res)
                props.setPolicy(res.data.data)
                history.push('/showpolicy')
            })
            .catch(err => { console.log(err) })
    }

    const deleteVehicle = (e) => {
        e.preventDefault();
        CustomerService.deleteVechile(e.target.value)
            .then(res => {
                console.log(res.data)
               setVehicles(vehicles.filter(i=>i.chasisNo!==e.target.value))
                history.push('/profile')
            })
            .catch(err => {
                    console.log(err)
                    alert(err.msg)
            })
    }
   
    

    return (
        state.loggedin.IsLoggedIn?
        <>     
            <div className="container emp-profile">
                <form method="post">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="profile-img" col-md-4>
                                <img src={`http://localhost:8080/api/users/${Authorization.getUser().userId}/image`} alt="" />

                            </div>
                            <Link to={"/uploadImg"} class="file btn btn-lg btn-primary">
                                Change Photo
                                {/* <input type="file" name="file" /> */}
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                <h3>
                                    {Authorization.getName()}
                                </h3>
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Profile</a>
                                    </li>
                                    <li className="nav-item">
                                        {Authorization.IsCustomer() ? <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">vehicles</a> : ""}</li>
                                    <li className="nav-item">
                                        {Authorization.IsProvider() ? <a class="nav-link" id="policy-tab" data-toggle="tab" href="#policy" role="tab" aria-controls="policy" aria-selected="false">Policies</a> : ""}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <Link className="btn btn-info" to={`/users`}>Update Profile</Link>
                            {/* <button  onClick={editProfile} className="btn btn-primary mb-2">Edit Profile</button> */}
                            {/* <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile" /> */}
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>User Id</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{Authorization.getUser().userId}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{Authorization.getName()}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{Authorization.getUser().email}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div claclassNamess="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{Authorization.getUser().contactNumber}</p>
                                        </div>
                                    </div>
                                    {LicenseNo === "" ? "" :
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>License No</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{LicenseNo}</p>
                                            </div>
                                        </div>}

                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Roles</label>
                                        </div>

                                        <div className>
                                            {Authorization.getUser().roles
                                                .map(element => {
                                                    return <span className="role">{element} <br /></span>

                                                })}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="tab-pane  fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div >
                                   

                                        <table className="table-sm table-hover">
                                            <thead className="thead-dark ">{vehicles.length === 0 ? "" :
                                                <tr >
                                                    <th scope="col">Chasis No</th>
                                                    <th scope="col">Registration Date</th>
                                                    <th scope="col">vehicleType</th>
                                                    <th scope="col">vehicleNumber</th>
                                                    <th scope="col">subscriptionDate</th>
                                                    <th scope="col">expiryDate</th>
                                                    <th scope="col">Policy Name</th>
                                                    <th scope="col"></th>
                                                </tr>}

                                            </thead>
                                            <tbody>
                                                {vehicles.map(v =>
                                                    <tr>
                                                        {/* <th scope="row">1</th> */}
                                                        <td>{v.chasisNo}</td>
                                                        <td>{v.registrationDate}</td>
                                                        <td>{v.vehicleType}</td>
                                                        <td>{v.vehicleNumber}</td>
                                                        <td>{v.subscriptionDate ? v.subscriptionDate : "---------"}</td>
                                                        <td>{v.expiryDate ? v.expiryDate : "----------"}</td>
                                                        <td>{v.policy ? <button value={v.policy.policyId} onClick={showPolicy} className="btn btn-primary mb-2">Show Policy</button> : <button onClick={addPolicy} value={v.chasisNo} className="btn btn-primary mb-2">Add Policy</button>}</td>
                                                        <td><button onClick={deleteVehicle} value={v.chasisNo} className="btn btn-danger mb-2">Delete</button></td>
                                                    </tr>

                                                )}
                                            </tbody>
                                            <Link to="/vehicle" className="btn btn-primary mb-2">Add Vehicle</Link>
                                        </table>

                                    
                                </div>
                                </div>
                                <div className="tab-pane fade" id="policy" role="tabpanel" aria-labelledby="profile-tab">
                                    <PolicyList policies={policies} delete={deleteHandler} />
                                    <Link to="/addPolicy" className="btn btn-primary mb-2">Add Policy</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>




















            {/* <h1>Welcome to Customer Page</h1>


            <Button url="/vehicle">AddVehicle</Button> */}
        
        </>:<RegisterLogin/>

    )

}
export default Customer;