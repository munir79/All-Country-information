import React from 'react';
import '../cn.css'

const Country = (props) => {
    const {name,flags,area,population}=props.country;
    console.log(props);

    return (
        <div className='cn'>
          <img src={flags.png} alt="" /><br />
          <h4>Name:{name.common}</h4>
          <h4> Area:{area}</h4>
          <h4> Population:{population}</h4>
          
        </div>
    );
};

export default Country;