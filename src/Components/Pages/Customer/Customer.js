
import { useEffect, useState } from "react";
import { Row, Table } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import CustomerService from "../../../Services/CustomerService";
import { Button } from "../../Button";
import Authorization from "./../../../Authorization"
import "./customer.css";

function Customer() {
    const [vehicles, setVehicles] = useState([]);
    const [LicenseNo, setLicenseNo] = useState('');

    const getLicenseNo = () => {
        CustomerService.getLicenseNo()
            .then(res => {
                console.log(res);
                setLicenseNo(res.data);
            })
            .catch(err =>
                console.log(err));
    }

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
        getAllVechiles();
        getLicenseNo();
    }, []);


    return (
        <>
            <div class="container emp-profile">
                <form method="post">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="profile-img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt="" />
                                {/* <div class="file btn btn-lg btn-primary">
                                    Change Photo
                                    <input type="file" name="file" />
                                </div> */}                               
                            </div>                           
                        </div>
                        <div class="col-md-6">
                            <div class="profile-head">
                                <h3>
                                    {Authorization.getName()}
                                </h3>
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Profile</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">vehicles</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
                        </div>
                       
                    </div>
                    <div class="row">       
                        <div class="col-md-8">
                            <div class="tab-content profile-tab" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>User Id</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{Authorization.getUser().userId}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{Authorization.getName()}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{Authorization.getUser().email}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{Authorization.getUser().contactNumber}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>License No</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{LicenseNo}</p>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Roles</label>
                                        </div>

                                        <div class>
                                            {Authorization.getUser().roles
                                                .map(element => {
                                                    return <span className="role">{element} <br /></span>

                                                })}
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div class="row">
                                        <table class="table">
                                            <thead>
                                                <tr >
                                                    <th scope="col">Chasis No</th>
                                                    <th scope="col">Registration Date</th>
                                                    <th scope="col">vehicleType</th>
                                                    <th scope="col">vehicleNumber</th>
                                                    <th scope="col">subscriptionDate</th>
                                                    <th scope="col">expiryDate</th>
                                                    <th scope="col">Policy Name</th>
                                                    <th scope="col"></th>
                                                </tr>
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
                                                        <td>{v.policy ? <button className="btn btn-primary mb-2">Show Policy</button> : <button className="btn btn-primary mb-2">Add Policy</button>}</td>
                                                        <td><button className="btn btn-danger mb-2">Delete</button></td>
                                                    </tr>

                                                )}
                                            </tbody>                                           
                                            <Link to="/vehicle" className="btn btn-primary mb-2">Add Vehicle</Link>        
                                        </table> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>




















            {/* <h1>Welcome to Customer Page</h1>


            <Button url="/vehicle">AddVehicle</Button> */}

        </>
    )

}
export default Customer;