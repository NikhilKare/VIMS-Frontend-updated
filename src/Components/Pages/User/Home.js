import '../../../App.css';
import Cards from '../../Cards';

import HeroSection from '../../HeroSection';
import TestiMonials from '../../TestiMonials/TestiMonials';
import UploadImage from '../ImageUpload';

function Home (){
    return(
        <>
        <HeroSection/>
        <TestiMonials/>
        <Cards/>        
        </>
    )
}
export default Home;