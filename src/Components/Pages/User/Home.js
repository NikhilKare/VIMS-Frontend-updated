import '../../../App.css';
import Cards from '../../Cards';

import HeroSection from '../../HeroSection';

import Navbar from '../../NavBar/Navbar';
import TestiMonials from '../../TestiMonials/TestiMonials';
import { NavLink } from 'react-router-dom';
import UploadImage from '../ImageUpload';
function Home (){
    return(
        <>
        
        <HeroSection/>
        <TestiMonials/>
        <Cards/>
        <UploadImage/>
        
        </>
    )
}
export default Home;