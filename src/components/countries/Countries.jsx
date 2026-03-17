import React, { use } from 'react';
import Country from '../country/Country';
import './countries.css'

const Countries = ({ countryPromise }) => {

    const countriesData = use(countryPromise)
    const countries = countriesData.countries

    return (
        <div>
            <h1>In The Country : {countries.length}</h1>

            <div className="countries">
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;