import React, { use } from 'react';

const Countries = ({countryPromise}) => {

    const countriesData = use(countryPromise)
    const countries = countriesData.countries
    console.log(countries);
   
    return (
        <div>
          <h1>In The Country : {countries.length}</h1>
          {/* {
            countries.map( country => (
                <h3 key={}></h3>
            ))
          } */}




        </div>
    );
};

export default Countries;