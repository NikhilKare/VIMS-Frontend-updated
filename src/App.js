
import './App.css';
// import Navbar from './Components/Navbar';
import Navbar from './Components/NavBar/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './Components/Pages/User/Home';
import AllPolicyList from './Components/Pages/User/AllPolicyList';
import RegisterLogin from './Components/RegisterLogin';
// import Login from './Components/Login';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Components/Footer';
import Customer from './Components/Pages/Customer/Customer';
import AddVehicle from './Components/Pages/Customer/AddVehicle';
import Roles from './Components/Roles';
import Authorization from './Authorization';
import {  useState } from 'react';
import AddRole from './Components/Pages/User/AddRole';
import Policy from './Components/Pages/Policy';
import EditUser from './Components/Pages/User/EditUser';
import UploadImage from './Components/Pages/ImageUpload';
import Policies from './Components/Pages/provider/Policies';
import AddPolicy from './Components/Pages/provider/AddPolicy';
import EditPolicy from './Components/Pages/provider/EditPolicy';
import AdminNavbar from './Components/NavBar/AdminNavbar';
import Admin from './Components/Pages/Admin/Admin';
import Contact from './Components/Test/Contact';
import { Payment } from './Components/Pages/Customer/Payment';


function App() {

  const [policy,setPolicy]=useState();
  
  

  return (
    <>  
    <Router>
    
    {Authorization.IsAdmin()?<AdminNavbar/>:<Navbar/>}
    {/* <CustomerNavbar/> */}
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path='/profile' render={()=> {return <Customer setPolicy={setPolicy}/>}}/>
      <Route path='/vehicle' component={AddVehicle}/>
      <Route path='/policies' component={AllPolicyList}/>
      <Route path='/addRole' component={AddRole}/>
      <Route path='/roles' render={()=><Roles roles={Authorization.getUser().roles}/>}/>
      <Route path='/sign-up-in' render={()=><RegisterLogin/>} />
      <Route path='/showpolicy' render={()=><Policy policy={policy} isView={true}/>} />
      <Route path="/users"component={EditUser} />
      <Route path="/uploadImg" component={UploadImage} />
      <Route path="/policy_provider" component={Policies} />
      <Route path="/addPolicy" component={AddPolicy} />
      <Route path="/updatepolicy"component={EditPolicy} />
      <Route path="/providers"component={Admin} />
      <Route path="/payment"component={Payment} />
      
    </Switch>
    <Footer/>
    </Router>
  
    </>
      
    
  );
}
export default App;
