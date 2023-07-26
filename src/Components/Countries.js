import React, { useEffect, useState } from 'react';
import './grid.css'
import Country from './Country';

const Countries = () => {
    const [count,setCountries]=useState([]);
    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div >
              <h1> Hello from all country </h1>
            <h3> Total Country:{count.length}</h3>
        
         <div className='container' >
         {
                count.map(country=> <Country  country={country}  ></Country>)
            }
         </div>
         
        </div>
    );
};

export default Countries;