import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {name, img, description, price,Live_Link,technology} = service;
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <h2>{Live_Link}</h2>
            {/* <p>Price: {price}</p> */}
            <p><small>{description}</small></p>
            <p><small>{technology}</small></p>
            <button className='btn btn-primary'>VIEW: {name}</button>
        </div>
    );
};

export default Service;