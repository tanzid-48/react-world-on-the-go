import React, { useState } from 'react';
import './country.css'


const Country = ({country,handleVisitedCountry}) => {

    const [visited,setVisited] =useState(false)

     const handleVisited = () =>{
    //    setVisited(visited ? false : true)
    setVisited(!visited)
     handleVisitedCountry(country)

     }
    return (
        // <div className={`country ${visited ? 'country-visited':'' }`}>
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt}/>
            <h2>Name: {country.name.common} </h2>
            <h3>Population: {country.population.population}</h3>
            <h4>Continents:{country.continents.continents}</h4>
            <h3>Area: {country.area.area}  
             { country.area.area > 300000 ? " Big Country" : " Small Country"}</h3>
             <button onClick={handleVisited}>
                {
                    visited ? "Visited" : "Not Visited"
                }
             </button>

        </div>
    );
};

export default Country;