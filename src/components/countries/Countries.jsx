import React, { use, useState } from 'react';
import Country from '../country/Country';
import './countries.css'

const Countries = ({ countryPromise }) => {
    const [visitedCountries,setVisitedCountries] = useState([])
    const handleVisitedCountry = (country) =>{
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
       

    }

    const countriesData = use(countryPromise)
    const countries = countriesData.countries

    return (
        <div>
            <h1>In The Country : {countries.length}</h1>
            <div className="visitedCountry">
                    
                <h3> Total Visited Countries:{ visitedCountries.length} </h3>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>

            </div>

            <div className="countries">
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country}
                     handleVisitedCountry = {handleVisitedCountry}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;