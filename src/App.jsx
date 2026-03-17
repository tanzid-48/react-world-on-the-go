import Countries from './components/countries/Countries'
import './App.css'
import { Suspense } from 'react';

const countryPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json());

function App() {


  return (
    <>

   <Suspense fallback= {<h4>Loading Country....</h4>}>
   <Countries countryPromise = {countryPromise}></Countries>
   </Suspense>

    </>
  )
}

export default App
