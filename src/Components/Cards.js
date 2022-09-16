import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { useEffect, useState } from 'react';
import vimsService from '../Services/VIMSService';
import car1 from '../Components/img/car-insurance.jpg';
import electric from '../Components/img/electric_car.svg';
import orderRide from '../Components/img/order_ride.svg';
function Cards() {
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
   
    <div className='cards'>
      
      <h1>Check out our Policies!</h1>
      
      <div className='cards__container'>
        <div className='cards__wrapper'>
         
          <div className="container">
          {/* <h3>List of policies</h3> */}
          <hr/>
          
          <ul className='cards__items'>
          <img src={electric} alt="car" className='img'></img>
            <CardItem 
              src={car1}
              text='Explore'
              label='Policies'
              path='/policies'
            />
            <img src={orderRide} alt="car" className='img1'></img>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Cards;