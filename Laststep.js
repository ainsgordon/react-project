import React from 'react';
import './App.css';
import Data from './data.json';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Laststep() {
    const params = useParams();
    const cartFees = Data[params.id].courses[params.num].data.cartFees;
    const hours = Data[params.id].courses[params.num].data.teeTimes;
    const fees = Data[params.id].courses[params.num].data.fees;
    
    return(
    <div className="App">
        <h2>{Data[params.id].courses[params.num].name}</h2>
        <h3>Hours of Operation</h3>
        <ul>
       {hours.map(item => (
           <li className="course--li">
               <p>{item}</p>
           </li>
        ))}
        </ul>
        <a href={Data[params.id].courses[params.num].data.bookingLink }><button>Book a Tee Time Here</button></a>
        <h3>Current Rates</h3>
        <ul>
        {fees.map(item => (
        <li className="course--li">
        <p>{item}</p>
        </li>
        ))}
        </ul>
        <h3>Cart Fees</h3>
        <ul>
        {cartFees.map(item => (
            <li className="course--li">
                <p>{item}</p>
            </li>
  ))}
      </ul>
      <h3>Contact Information:</h3>
      <p>{Data[params.id].courses[params.num].data.contactInformation}</p>
      <h3>Address:</h3>
      <p>{Data[params.id].courses[params.num].data.address}</p>
      </div>
    );
}

export default Laststep;