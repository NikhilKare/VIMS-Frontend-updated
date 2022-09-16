
import './App.css';
// import Navbar from './Components/Navbar';
import Navbar from './Components/NavBar/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './Components/Pages/Home';
import PolicyList from './Components/Pages/PolicyList';
import RegisterLogin from './Components/RegisterLogin';
// import Login from './Components/Login';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Components/Footer';
import Customer from './Components/Pages/Customer';
import AddVehicle from './Components/Pages/AddVehicle';
import Roles from './Components/Roles';
function App() {

  return (
    <>  
    <Router>
    <Navbar/>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path='/customer' component={Customer}/>
      <Route path='/vehicle' component={AddVehicle}/>
      <Route path='/policies' component={PolicyList}/>
      <Route path='/sign-up-in' component={RegisterLogin}/>
      <Route path='/roles' component={Roles}/>
    </Switch>
    <Footer/>
    </Router>
  
    </>
      
    
  );
}
export default App;
