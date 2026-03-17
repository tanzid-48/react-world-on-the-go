import React from 'react';
import './country.css'

const Country = ({country}) => {

     const handleVisited = () =>{

     }
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt}/>
            <h2>Name: {country.name.common} </h2>
            <h3>Population: {country.population.population}</h3>
            <h4>Continents:{country.continents.continents}</h4>
            <h3>Area: {country.area.area}  
             { country.area.area > 300000 ? " Big Country" : " Small Country"}</h3>
             <button onClick={handleVisited}>Not Visited</button>

        </div>
    );
};

export default Country;