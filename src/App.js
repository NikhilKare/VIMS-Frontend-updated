
import './App.css';
// import Navbar from './Components/Navbar';
import Navbar from './Components/NavBar/Navbar';
import {BrowserRouter as Router,Switch,Route, useHistory} from 'react-router-dom'
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
import { useEffect, useState } from 'react';
import AddRole from './Components/Pages/User/AddRole';
import Policy from './Components/Pages/Policy';

function App() {

  const[IsLoggedIn,setLogIn]=useState(false);
  const [policy,setPolicy]=useState();
  
  useEffect(()=>
  setLogIn(Authorization.IsLoggedIn))

  return (
    <>  
    <Router>
    <Navbar IsLoggedIn={IsLoggedIn} setLogIn={setLogIn}/>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path='/customer' render={()=><Customer setPolicy={setPolicy}/>}/>
      <Route path='/vehicle' component={AddVehicle}/>
      <Route path='/policies' component={AllPolicyList}/>
      <Route path='/addRole' component={AddRole}/>
      <Route path='/roles' render={()=><Roles roles={Authorization.getUser().roles}/>}/>
      <Route path='/sign-up-in' render={()=><RegisterLogin IsLoggedIn={setLogIn}/>} />
      <Route path='/showpolicy' render={()=><Policy policy={policy} isView={true}/>} />
     
    </Switch>
    <Footer/>
    </Router>
  
    </>
      
    
  );
}
export default App;
